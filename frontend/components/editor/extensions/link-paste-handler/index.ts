import { Editor } from '@tiptap/core';
import { MarkType } from '@tiptap/pm/model';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { find } from 'linkifyjs';
import { isGithubLink } from '~/components/editor/extensions/github-link/github';
import { EditorContext } from '~/@types/app';
import { isYoutubeLink } from '~/components/editor/extensions/youtube';
import { isLinearLink } from '~/plugins/entities/linear';

type PasteHandlerOptions = {
    editor: Editor;
    type: MarkType;
    linkOnPaste?: boolean;
};

export function pasteHandler(
    ctx: EditorContext,
    options: PasteHandlerOptions,
): Plugin {
    const isIntegrationLink = (link: string) => {
        if (isLinearLink(link) && ctx.nuxt.$entities.linear.getIntegration()) {
            return true;
        }

        const githubIntegration = ctx.nuxt.$entities.github.getIntegration();
        if (isGithubLink(link) && githubIntegration) {
            return true;
        }

        const jiraIntegration = ctx.nuxt.$entities.jira.getIntegration();
        if (jiraIntegration) {
            const isJiraLink = ctx.nuxt.$entities.jira.isJiraLink(
                link,
                jiraIntegration,
            );
            if (isJiraLink && jiraIntegration) {
                return true;
            }
        }

        if (isYoutubeLink(link)) {
            return true;
        }
        return false;
    };

    return new Plugin({
        key: new PluginKey('handlePasteLink'),
        props: {
            handlePaste: (view, event, slice) => {
                const { state } = view;
                const { selection } = state;

                // Do not proceed if in code block.
                if (state.doc.resolve(selection.from).parent.type.spec.code) {
                    return false;
                }

                let textContent = '';

                slice.content.forEach(node => {
                    textContent += node.textContent;
                });

                let isAlreadyLink = false;

                slice.content.descendants(node => {
                    if (
                        node.marks.some(
                            mark => mark.type.name === options.type.name,
                        )
                    ) {
                        isAlreadyLink = true;
                    }
                });

                if (isAlreadyLink) {
                    return;
                }

                const link = find(textContent).find(
                    item => item.isLink && item.value === textContent,
                );
                if (!link) {
                    return false;
                }
                if (isIntegrationLink(link.href)) {
                    return false;
                }
                if (!selection.empty && options.linkOnPaste) {
                    const pastedLink = link?.href || null;

                    if (pastedLink) {
                        options.editor.commands.setMark(options.type, {
                            href: pastedLink,
                        });

                        return true;
                    }
                }

                const firstChildIsText =
                    slice.content.firstChild?.type.name === 'text';
                const firstChildContainsLinkMark =
                    slice.content.firstChild?.marks.some(
                        mark => mark.type.name === options.type.name,
                    );

                if (
                    (firstChildIsText && firstChildContainsLinkMark) ||
                    !options.linkOnPaste
                ) {
                    return false;
                }

                if (link && selection.empty) {
                    options.editor.commands.insertContent(
                        `<a href="${link.href}">${link.href}</a>`,
                    );

                    return true;
                }

                const { tr } = state;
                let deleteOnly = false;

                if (!selection.empty) {
                    deleteOnly = true;

                    tr.delete(selection.from, selection.to);
                }

                let currentPos = selection.from;
                let fragmentLinks = [];

                slice.content.forEach(node => {
                    fragmentLinks = find(node.textContent);

                    tr.insert(currentPos - 1, node);

                    if (fragmentLinks.length > 0) {
                        deleteOnly = false;

                        fragmentLinks.forEach(fragmentLink => {
                            const linkStart = currentPos + fragmentLink.start;
                            const linkEnd = currentPos + fragmentLink.end;
                            const hasMark = tr.doc.rangeHasMark(
                                linkStart,
                                linkEnd,
                                options.type,
                            );

                            if (!hasMark) {
                                tr.addMark(
                                    linkStart,
                                    linkEnd,
                                    options.type.create({
                                        href: fragmentLink.href,
                                    }),
                                );
                            }
                        });
                    }
                    currentPos += node.nodeSize;
                });

                const hasFragmentLinks = fragmentLinks.length > 0;

                if (tr.docChanged && !deleteOnly && hasFragmentLinks) {
                    options.editor.view.dispatch(tr);

                    return true;
                }

                return false;
            },
        },
    });
}
