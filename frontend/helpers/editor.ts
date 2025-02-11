import { CommandProps, Editor, generateHTML, JSONContent } from '@tiptap/core';
import { Node } from '@tiptap/pm/model';
import { INLINE_DOCUMENT_LINK_NODE_NAME } from '~/components/editor/extensions/inline-document-link';
import { IDocument } from '~/components/document/model';
import { BLOCK_KATEX_NODE_NAME } from '~/components/editor/extensions/katex';
import { MERMAID_NODE_NAME } from '~/components/editor/extensions/mermaid';
import { INLINE_TASK_CONTENT_NAME } from '~/components/editor/extensions/task-item';
import { CodeBlock } from '~/components/editor/extensions/codeblock-codemirror';

export const isDragEvent = (event: any): event is DragEvent => {
    return event && event.dataTransfer;
};

const truncate = (input: string) =>
    input.length > 60 ? `${input.substring(0, 60)}...` : input;

export const generateDocumentFromSelection = (editor: Editor) => {
    const selection = editor.view.state.selection;
    const cut = editor.view.state.doc.cut(selection.from, selection.to);

    const json = cut.toJSON();
    if (!json) return; // TODO: handle on FE?

    let content = generateHTML(json as JSONContent, [
        ...editor.extensionManager.extensions,
    ]);

    let title = '';
    if (!cut.firstChild) return;

    const firstTitleNode = (cut.content as any).content.find(
        (node: any) =>
            [
                'heading',
                'paragraph',
                'bulletList',
                'orderedList',
                'table',
            ].includes(node.type.name) && node.textContent,
    );
    if (firstTitleNode) {
        if (
            firstTitleNode.type.name === 'bulletList' ||
            firstTitleNode.type.name === 'orderedList'
        ) {
            if (firstTitleNode.firstChild.type.name === 'listItem') {
                title = truncate(firstTitleNode.firstChild.textContent);
            }
        } else if (firstTitleNode.type.name === 'heading') {
            title = truncate(firstTitleNode.textContent);
            const level = firstTitleNode.attrs.level;
            const id = firstTitleNode.attrs.id;
            const tag = `<h${level} data-id="${id}">${firstTitleNode.textContent}</h${level}>`;
            content = content.replace(tag, '');
        } else if (firstTitleNode.type.name === 'table') {
            title = truncate(firstTitleNode.firstChild.textContent);
            content = truncate(firstTitleNode.firstChild.textContent);
        } else {
            title = truncate(firstTitleNode.textContent);
        }
    }
    return { title: title.trim(), content };
};

export const generateTaskFromSelection = (
    editor: Editor,
    getDocument: (id: string) => IDocument,
) => {
    const selection = editor.view.state.selection;
    const selectedNode = editor.state.doc.nodeAt(selection.from);

    const cut = editor.view.state.doc.cut(selection.from, selection.to);

    let shouldRemoveParagraphBefore = false;
    if (!cut.firstChild) return;
    const firstSelectedText = cut.firstChild.textContent;
    const selectedText = selectedNode ? selectedNode.textContent : null;
    if (
        selectedText &&
        selectedText === firstSelectedText &&
        selectedText.indexOf(firstSelectedText) === 0
    ) {
        shouldRemoveParagraphBefore = true;
    }
    const acc: string[] = [];
    cut.content.descendants((node, _pos, _parent) => {
        if (['paragraph', 'heading', CodeBlock.name].includes(node.type.name)) {
            acc.push(node.textContent);
        }
        if (node.type.name === INLINE_DOCUMENT_LINK_NODE_NAME) {
            const document = getDocument(node.attrs.id);
            acc.push(`[[ ${document.title} ]]`);
        }
        return !!node.content.childCount;
    });
    const text = acc.join(' ');
    return { text, shouldRemoveParagraphBefore };
};

export const generateTaskListFromSelection = (editor: Editor) => {
    const nodes: {
        isInList: boolean;
        pos: number;
        node: any;
        index: number;
        listItemRange: any;
    }[] = [];
    let firstNode: any = null;
    let lastNode: any = null;
    const ignoreNodes = [
        'taskItemContent',
        'blockquote',
        'codeBlock',
        'table',
        MERMAID_NODE_NAME,
        BLOCK_KATEX_NODE_NAME,
        'image',
        'imageComponent',
    ];
    const textNodes = ['heading', 'paragraph'];
    const listNodes = ['bulletList', 'orderedList'];
    const wrapInList = () => {
        const cutContent = editor.state.doc.cut(
            firstNode!.pos,
            lastNode!.pos + lastNode!.node.nodeSize,
        );

        const defaultSection = () => ({
            from: -1,
            to: -1,
            content: [] as Node[],
        });
        const sections = [defaultSection()];

        const cutContentJSON = cutContent.toJSON().content;
        cutContent.content.forEach((node, offset, index) => {
            const isTaskItemContent =
                node.type.name === INLINE_TASK_CONTENT_NAME;
            if (!isTaskItemContent) {
                sections.push(defaultSection());
                return;
            }
            if (sections[sections.length - 1].from === -1) {
                sections[sections.length - 1].from = offset;
            }
            sections[sections.length - 1].to = offset + node.nodeSize;
            sections[sections.length - 1].content.push(cutContentJSON[index]);
        });
        const sectionsToWrap = sections.filter(
            section => section.content.length > 0,
        );

        const chain = editor.chain();
        sectionsToWrap.reverse().forEach(section => {
            chain.insertContentAt(
                { from: section.from, to: section.to },
                {
                    type: 'bulletList',
                    content: section.content.map((node: any) => {
                        return {
                            type: 'listItem',
                            content: [node],
                        };
                    }),
                },
            );
        });
        chain.run();
    };

    editor.commands.command(({ state }: CommandProps) => {
        const { selection, tr } = state;
        let isInList = false;

        state.doc.nodesBetween(
            selection.from,
            selection.to,
            (node: any, pos: any, parent) => {
                const isListNode = listNodes.includes(node.type.name);
                const isTextNode = textNodes.includes(node.type.name);
                if (
                    !isListNode &&
                    !isTextNode &&
                    node.type.name !== 'listItem'
                ) {
                    isInList = false;
                    return false;
                }

                const isIgnoredNode = ignoreNodes.includes(node.type.name);
                if (isIgnoredNode) return false;

                if (isListNode && !isInList) {
                    isInList = true;
                    return;
                }
                if (isInList && parent?.type.name !== 'listItem') {
                    isInList = false;
                    return;
                }
                if (!isTextNode) return;
                if (!node.textContent && !isInList) return false;
                nodes.push({
                    isInList,
                    pos,
                    node,
                    index: nodes.length,
                    listItemRange: null,
                });
                return false;
            },
        );
        nodes.reverse();
        for (const currentNode of nodes) {
            tr.setNodeMarkup(
                currentNode.pos,
                editor.schema.node('taskItemContent').type,
            );
        }
        return true;
    });

    for (const node of nodes) {
        if (node.isInList) {
            if (!firstNode || !lastNode) {
                continue;
            }
            // wrapInList();
            firstNode = null;
            lastNode = null;
            continue;
        }
        if (!lastNode) {
            lastNode = node;
            firstNode = node;
            continue;
        }
        firstNode = node;
    }
    if (!firstNode || !lastNode) {
        return true;
    }
    wrapInList();
    return true;
};

export const listSelected = (editor: Editor) => {
    const selection = editor.view.state.selection;
    let selectedItems = 0;
    editor.state.doc.nodesBetween(selection.from, selection.to, (node: any) => {
        if (
            node.type.name === 'bulletList' ||
            node.type.name === 'orderedList'
        ) {
            return true;
        }
        if (node.type.name === 'listItem') {
            selectedItems++;
            return false;
        }
        return true;
    });
    return selectedItems > 0;
};
