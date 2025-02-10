import { Plugin, PluginKey, TextSelection } from '@tiptap/pm/state';
import { VueNodeViewRenderer } from '@tiptap/vue-2';
import CodeBlockComponent from './CodeBlockComponent.vue';
import { registerEditorExtension } from '~/components/editor/extensions';
import { EditorContext } from '~/@types/app';
import { EditorTypes } from '~/constants';
import {
    getIndentationIndexes,
    indentLeft,
    wrappingCharacters,
    wrapSelection,
} from '~/components/editor/extensions/codeblock/helpers';
import { CodeBlock } from '../codeblock-codemirror';

registerEditorExtension({
    type: EditorTypes.FULL,
    createInstance(ctx: EditorContext) {
        const indent = new Array(4).fill('').join(' ');
        ctx.bubbleMenuExceptions.add(CodeBlock.name);

        const codeblock = CodeBlock.extend({
            addKeyboardShortcuts() {
                const wrapRecord = wrappingCharacters.reduce(
                    (acc: Record<string, () => boolean>, character: string) => {
                        acc[character] = () => {
                            const editor = ctx.editor();
                            if (!editor) return false;
                            const { from, to, $anchor } =
                                editor.state.selection;

                            if ($anchor.parent.type.name !== this.name) {
                                return false;
                            }
                            if (to - from < 1) return false;
                            wrapSelection(editor, character, from, to);
                            return true;
                        };
                        return acc;
                    },
                    {} as Record<string, () => boolean>,
                );

                return {
                    ...wrapRecord,
                    'Mod-Alt-c': () => {
                        const editor = ctx.editor();
                        if (!editor) return false;
                        return editor.commands.toggleCodeBlock();
                    },
                    'Shift-Tab': () => {
                        const editor = ctx.editor();
                        if (!editor) return false;
                        const { $anchor } = editor.state.selection;

                        if ($anchor.parent.type.name !== this.name) {
                            return false;
                        }

                        return editor.commands.command(({ tr, state }) => {
                            const { selection } = state;
                            editor.commands.selectParentNode();
                            const parentPosition =
                                editor.state.selection.$anchor.pos;
                            const textBeforeSelection =
                                editor.state.doc.textBetween(
                                    parentPosition + 1,
                                    selection.from,
                                );
                            const from = Math.min(
                                parentPosition +
                                textBeforeSelection.lastIndexOf('\n') +
                                2,
                                selection.from,
                            );
                            const text = editor.state.doc.textBetween(
                                from,
                                selection.to,
                            );
                            const indentationIndexes =
                                getIndentationIndexes(text);
                            const { text: newText, moveFrom } = indentLeft(
                                text,
                                indent,
                            );
                            if (newText.length === text.length) return true;
                            tr.insertText(newText, from, selection.to);
                            if (selection.to - selection.from < 1) return true;
                            tr.setSelection(
                                TextSelection.create(
                                    tr.doc,
                                    selection.from -
                                    (moveFrom && from < selection.from
                                        ? indent.length
                                        : 0),

                                    selection.to -
                                    (text.length - newText.length),
                                ),
                            );
                            return true;
                        });
                    },
                    Tab: () => {
                        const editor = ctx.editor();
                        if (!editor) return false;
                        const { $anchor } = editor.state.selection;

                        if ($anchor.parent.type.name !== this.name) {
                            return false;
                        }

                        return editor.commands.command(({ tr, state }) => {
                            const { selection } = state;
                            editor.commands.selectParentNode();
                            const parentPosition =
                                editor.state.selection.$anchor.pos;
                            const textBeforeSelection =
                                editor.state.doc.textBetween(
                                    parentPosition + 1,
                                    selection.from + 1,
                                );
                            const from = Math.min(
                                parentPosition +
                                textBeforeSelection.lastIndexOf('\n') +
                                2,
                                selection.from,
                            );
                            const text = editor.state.doc.textBetween(
                                from,
                                selection.to,
                            );
                            if (selection.to - selection.from < 1) {
                                tr.insertText(indent, selection.from);
                                return true;
                            }
                            const indentationIndexes =
                                getIndentationIndexes(text);
                            // reverse the order so that the positions stay the same for earlier indexes
                            indentationIndexes.reverse().forEach(index => {
                                tr.insertText(indent, from + index);
                            });
                            tr.setSelection(
                                TextSelection.create(
                                    tr.doc,
                                    selection.from +
                                    (from < selection.from
                                        ? indent.length
                                        : 0),
                                    selection.to +
                                    indentationIndexes.length *
                                    indent.length,
                                ),
                            );
                            return true;
                        });
                    },

                    'Mod-a': () => {
                        const editor = ctx.editor();
                        if (!editor) return false;
                        const { state, view } = editor;
                        const { selection, tr } = state;
                        const { $from, $to, ranges } = selection;

                        // Check if the current selection is entirely within a code block
                        if (
                            $from.parent.type === this.type &&
                            $from.parent === $to.parent
                        ) {
                            if (
                                ranges.length === 1 &&
                                ranges[0].$from.parentOffset === 0 &&
                                ranges[0].$to.parentOffset ===
                                $from.parent.content.size
                            ) {
                                return false;
                            } else {
                                // Select the whole code block
                                const start = $from.start() - 1;
                                const end = start + $from.parent.nodeSize;
                                const newSelection = TextSelection.create(
                                    tr.doc,
                                    start,
                                    end,
                                );
                                view.dispatch(tr.setSelection(newSelection));
                            }
                            return true;
                        }
                        return false;
                    },

                    // remove code block when at start of document or code block is empty
                    Backspace: () => {
                        const editor = ctx.editor();
                        if (!editor) return false;
                        const { empty, $anchor } = editor.state.selection;
                        const isAtStart = $anchor.pos === 1;

                        if (!empty || $anchor.parent.type.name !== this.name) {
                            return false;
                        }

                        if (isAtStart || !$anchor.parent.textContent.length) {
                            return editor.commands.clearNodes();
                        }

                        const { selection } = editor.state;
                        if (selection.to - selection.from > 0) return false;

                        editor.commands.selectParentNode();
                        const parentPosition =
                            editor.state.selection.$anchor.pos;
                        const textBeforeSelection =
                            editor.state.doc.textBetween(
                                parentPosition + 1,
                                selection.from,
                            );
                        const from = Math.min(
                            parentPosition +
                            textBeforeSelection.lastIndexOf('\n') +
                            2,
                            selection.from,
                        );
                        const text = editor.state.doc.textBetween(
                            from,
                            selection.from,
                        );
                        if (!/^\s+$/.test(text)) {
                            editor.commands.setTextSelection(selection.from);
                            return false;
                        }
                        const deleteCount = text.length; // % indent.length || indent.length;

                        editor.commands.command(({ tr }) => {
                            tr.delete(
                                selection.from - deleteCount - 1,
                                selection.from,
                            );
                            tr.setSelection(
                                TextSelection.create(
                                    tr.doc,
                                    selection.from - deleteCount - 1,
                                ),
                            );
                            return true;
                        });
                        return true;
                    },

                    // exit node on triple enter
                    Enter: () => {
                        const editor = ctx.editor();
                        if (!editor) return false;
                        if (!this.options.exitOnTripleEnter) {
                            return false;
                        }

                        const { state } = editor;
                        const { selection } = state;
                        const { $from, empty } = selection;

                        if (!empty || $from.parent.type !== this.type) {
                            return false;
                        }

                        const isAtEnd =
                            $from.parentOffset === $from.parent.nodeSize - 2;
                        const endsWithDoubleNewline = /\s*?\n(\s*?\n\s*)$/.exec(
                            $from.parent.textContent,
                        );

                        if (isAtEnd && endsWithDoubleNewline) {
                            const lastLineLength =
                                endsWithDoubleNewline[1].length + 1;
                            return editor
                                .chain()
                                .command(({ tr }) => {
                                    tr.delete(
                                        $from.pos - lastLineLength,
                                        $from.pos,
                                    );

                                    return true;
                                })
                                .exitCode()
                                .run();
                        }

                        if (selection.to - selection.from > 0) return false;

                        editor.commands.selectParentNode();
                        const parentPosition =
                            editor.state.selection.$anchor.pos;
                        const textBeforeSelection =
                            editor.state.doc.textBetween(
                                parentPosition + 1,
                                selection.from,
                            );
                        const from = Math.min(
                            parentPosition +
                            textBeforeSelection.lastIndexOf('\n') +
                            2,
                            selection.from,
                        );
                        const text = editor.state.doc.textBetween(
                            from,
                            selection.from,
                        );
                        const match = /^(\s+)/.exec(text);
                        if (!match) {
                            editor.commands.setTextSelection(selection.from);
                            return false;
                        }
                        const indentationLevel = Math.floor(
                            match[1].length / indent.length,
                        );
                        const newLineIndent =
                            '\n' + indent.repeat(indentationLevel);
                        return editor.commands.command(({ tr }) => {
                            tr.insertText(newLineIndent, selection.from);
                            tr.setSelection(
                                TextSelection.create(
                                    tr.doc,
                                    selection.from + newLineIndent.length,
                                ),
                            );
                            return true;
                        });
                    },

                    // exit node on arrow down
                    ArrowDown: ({ editor }) => {
                        if (!this.options.exitOnArrowDown) {
                            return false;
                        }

                        const { state } = editor;
                        const { selection, doc } = state;
                        const { $from, empty } = selection;

                        if (!empty || $from.parent.type !== this.type) {
                            return false;
                        }

                        const isAtEnd =
                            $from.parentOffset === $from.parent.nodeSize - 2;

                        if (!isAtEnd) {
                            return false;
                        }

                        const after = $from.after();

                        if (after === undefined) {
                            return false;
                        }

                        const nodeAfter = doc.nodeAt(after);

                        if (nodeAfter) {
                            return false;
                        }

                        return editor.commands.exitCode();
                    },
                };
            },

            addNodeView() {
                return VueNodeViewRenderer(CodeBlockComponent);
            },

            addAttributes() {
                return {
                    language: {
                        default: null,
                        parseHTML: element => {
                            const { languageClassPrefix } = this.options;
                            const classNames = [
                                ...((element.firstElementChild?.classList ||
                                    []) as string[]),
                            ];
                            const languages = classNames
                                .filter(className =>
                                    className.startsWith(languageClassPrefix),
                                )
                                .map(className =>
                                    className.replace(languageClassPrefix, ''),
                                );
                            const language = languages[0];

                            if (!language) {
                                return null;
                            }

                            return language;
                        },
                        renderHTML: attributes => {
                            if (!attributes.language) {
                                return null;
                            }

                            return {
                                class:
                                    this.options.languageClassPrefix +
                                    attributes.language,
                            };
                        },
                    },
                };
            },

            parseHTML() {
                return [
                    {
                        tag: 'pre',
                        preserveWhitespace: 'full',
                    },
                ];
            },

            renderHTML({ HTMLAttributes }) {
                console.log('html being rendered here', HTMLAttributes)
                return [
                    'pre',
                    this.options.HTMLAttributes,
                    ['code', HTMLAttributes, 0],
                ];
            },

            addProseMirrorPlugins() {
                return [
                    ...(this.parent?.() ?? []),
                    new Plugin({
                        key: new PluginKey('codeblockEndlineTransform'),
                        props: {
                            transformCopied: (slice, _view) => {
                                if (!ctx.nuxt.$utils.isWindows) return slice;
                                slice.content.forEach(node => {
                                    if (node.type.name !== this.name) {
                                        return;
                                    }

                                    node.content.forEach(child => {
                                        if (child.type.name !== 'text') {
                                            return;
                                        }

                                        // @ts-ignore
                                        child.text! = child.text?.replaceAll(
                                            '\n',
                                            '\r\n',
                                        );
                                    });
                                });
                                return slice;
                            },
                        },
                    }),
                    new Plugin({
                        key: new PluginKey('GithubCodePaste'),
                        props: {
                            handlePaste: (view, event) => {
                                if (!event.clipboardData) {
                                    return false;
                                }
                                const editor = ctx.editor();
                                if (!editor) return;

                                if (editor.isActive(this.type.name)) {
                                    return false;
                                }

                                const text =
                                    event.clipboardData.getData('text/plain');
                                let format =
                                    event.clipboardData.getData('text/html');

                                format = format.replace(/ style="[^"]+"/g, '');

                                const parser = new DOMParser();
                                const code = parser.parseFromString(
                                    format,
                                    'text/html',
                                );
                                let elementList:
                                    | HTMLCollectionOf<HTMLTableElement>
                                    | HTMLCollectionOf<Element> =
                                    code.body.getElementsByTagName('table');
                                if (!elementList.length) {
                                    elementList =
                                        code.body.getElementsByClassName(
                                            'blame-hunk',
                                        );
                                }

                                if (!elementList.length) return false;

                                const githubClasses = [
                                    'highlight',
                                    'tab-size',
                                    'diff-table',
                                    'js-diff-table',
                                    'js-file-line-container',
                                    'js-code-nav-container',
                                    'js-tagsearch-file',
                                    'blame-hunk',
                                ];
                                const githubAttributes = [
                                    'data-diff-anchor',
                                    'data-paste-markdown-skip',
                                    'data-tagsearch-lang',
                                    'data-tagsearch-path',
                                ];
                                const rootElement = elementList.item(0);
                                if (!rootElement) return false;
                                const classes = rootElement.classList;
                                const hasGithubClasses = githubClasses.reduce(
                                    (acc, cls) => {
                                        return acc || classes.contains(cls);
                                    },
                                    false,
                                );
                                const hasLang = rootElement.hasAttribute(
                                    'data-tagsearch-lang',
                                );
                                const hasGithubAttrs = githubAttributes.reduce(
                                    (acc, attr) => {
                                        return (
                                            acc ||
                                            rootElement.hasAttribute(attr)
                                        );
                                    },
                                    false,
                                );
                                if (!hasGithubClasses) return false;

                                if (
                                    !hasLang &&
                                    !hasGithubAttrs &&
                                    !classes.contains('blame-hunk')
                                ) {
                                    return false;
                                }
                                const language = hasLang
                                    ? rootElement.getAttribute(
                                        'data-tagsearch-lang',
                                    )
                                    : null;
                                const { tr } = view.state;

                                tr.replaceSelectionWith(
                                    this.type.create(
                                        {
                                            language:
                                                language?.toLowerCase() ?? null,
                                        },
                                        editor.schema.text(
                                            text.replace(/\r\n?/g, '\n'),
                                        ),
                                    ),
                                );
                                tr.setMeta('paste', true);
                                view.dispatch(tr);

                                return true;
                            },
                        },
                    }),
                ];
            },
        });

        if (ctx.config.codeblock) {
            return codeblock.configure(ctx.config.codeblock);
        }

        return codeblock;
    },
});
