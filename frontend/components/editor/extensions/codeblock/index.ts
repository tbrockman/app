import { Plugin, PluginKey, Selection, TextSelection } from '@tiptap/pm/state';
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
import {
    EditorView as CodeMirror, KeyBinding, ViewUpdate, keymap as cmKeymap, drawSelection
} from "@codemirror/view"
import { javascript } from "@codemirror/lang-javascript"
import { defaultKeymap } from "@codemirror/commands"
import { syntaxHighlighting, defaultHighlightStyle } from "@codemirror/language"
import { vscodeDark, vscodeLight } from '@uiw/codemirror-theme-vscode';
import { exitCode } from "prosemirror-commands"
import { undo, redo } from "prosemirror-history"

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
                return ({ editor, node, getPos, HTMLAttributes }) => {
                    // Create a wrapper div for CodeMirror
                    const { view, schema } = editor;
                    const dom = document.createElement("div");
                    dom.classList.add("cm-wrapper");
                    let updating = false;

                    const forwardUpdate = (cm: CodeMirror, update: ViewUpdate) => {
                        if (updating || !cm.hasFocus) return
                        // @ts-expect-error
                        let offset = getPos() + 1, { main } = update.state.selection
                        let selFrom = offset + main.from, selTo = offset + main.to
                        let pmSel = view.state.selection
                        if (update.docChanged || pmSel.from != selFrom || pmSel.to != selTo) {
                            let tr = view.state.tr
                            update.changes.iterChanges((fromA, toA, fromB, toB, text) => {
                                if (text.length)
                                    tr.replaceWith(offset + fromA, offset + toA,
                                        schema.text(text.toString()))
                                else
                                    tr.delete(offset + fromA, offset + toA)
                                offset += (toB - fromB) - (toA - fromA)
                            })
                            tr.setSelection(TextSelection.create(tr.doc, selFrom, selTo))
                            view.dispatch(tr)
                        }
                    }

                    const maybeEscape = (unit: any, dir: any) => {
                        let { state } = cm, { main }: any = state.selection
                        if (!main.empty) return false
                        if (unit == "line") main = state.doc.lineAt(main.head)
                        if (dir < 0 ? main.from > 0 : main.to < state.doc.length) return false
                        // @ts-ignore
                        let targetPos = getPos() + (dir < 0 ? 0 : node.nodeSize)
                        let selection = Selection.near(view.state.doc.resolve(targetPos), dir)
                        let tr = view.state.tr.setSelection(selection).scrollIntoView()
                        view.dispatch(tr)
                        view.focus()
                    }

                    const codemirrorKeymap = () => {
                        return [
                            { key: "ArrowUp", run: () => maybeEscape("line", -1) },
                            { key: "ArrowLeft", run: () => maybeEscape("char", -1) },
                            { key: "ArrowDown", run: () => maybeEscape("line", 1) },
                            { key: "ArrowRight", run: () => maybeEscape("char", 1) },
                            {
                                key: "Ctrl-Enter", run: () => {
                                    if (!exitCode(view.state, view.dispatch)) return false
                                    view.focus()
                                    return true
                                }
                            },
                            {
                                key: "Ctrl-z", mac: "Cmd-z",
                                run: () => undo(view.state, view.dispatch)
                            },
                            {
                                key: "Shift-Ctrl-z", mac: "Shift-Cmd-z",
                                run: () => redo(view.state, view.dispatch)
                            },
                            {
                                key: "Ctrl-y", mac: "Cmd-y",
                                run: () => redo(view.state, view.dispatch)
                            }
                        ] as KeyBinding[]
                    }

                    // Create a CodeMirror instance
                    const cm = new CodeMirror({
                        doc: node.textContent,
                        extensions: [
                            cmKeymap.of([
                                ...codemirrorKeymap(),
                                ...defaultKeymap
                            ]),
                            drawSelection(),
                            // syntaxHighlighting(defaultHighlightStyle),
                            vscodeDark,
                            javascript({ jsx: true, typescript: true }),
                            CodeMirror.updateListener.of((update) => { forwardUpdate(cm, update) }),
                        ],
                    });

                    // Append CodeMirror to the wrapper
                    dom.appendChild(cm.dom);

                    return {
                        dom,
                        setSelection(anchor, head) {
                            cm.focus()
                            updating = true
                            cm.dispatch({ selection: { anchor, head } })
                            updating = false
                        },
                        destroy() {
                            cm.destroy();
                        },
                        update(updated) {
                            if (updated.type != node.type) return false
                            node = updated
                            if (updating) return true
                            let newText = updated.textContent, curText = cm.state.doc.toString()
                            if (newText != curText) {
                                let start = 0, curEnd = curText.length, newEnd = newText.length
                                while (start < curEnd &&
                                    curText.charCodeAt(start) == newText.charCodeAt(start)) {
                                    ++start
                                }
                                while (curEnd > start && newEnd > start &&
                                    curText.charCodeAt(curEnd - 1) == newText.charCodeAt(newEnd - 1)) {
                                    curEnd--
                                    newEnd--
                                }
                                updating = true
                                cm.dispatch({
                                    changes: {
                                        from: start, to: curEnd,
                                        insert: newText.slice(start, newEnd)
                                    }
                                })
                                updating = false
                            }
                            return true
                        }
                    };
                };
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
