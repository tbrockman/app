import { Node, textblockTypeInputRule } from '@tiptap/core'
import {
    Plugin,
    PluginKey,
    Selection,
    TextSelection,
} from '@tiptap/pm/state'

export interface CodeBlockOptions {
    /**
     * Adds a prefix to language classes that are applied to code tags.
     * @default 'language-'
     */
    languageClassPrefix: string
    /**
     * Define whether the node should be exited on triple enter.
     * @default true
     */
    exitOnTripleEnter: boolean
    /**
     * Define whether the node should be exited on arrow down if there is no node after it.
     * @default true
     */
    exitOnArrowDown: boolean
    /**
     * The default language.
     * @default null
     * @example 'js'
     */
    defaultLanguage: string | null | undefined
    /**
     * Custom HTML attributes that should be added to the rendered HTML tag.
     * @default {}
     * @example { class: 'foo' }
     */
    HTMLAttributes: Record<string, any>
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        codeBlock: {
            /**
             * Set a code block
             * @param attributes Code block attributes
             * @example editor.commands.setCodeBlock({ language: 'javascript' })
             */
            setCodeBlock: (attributes?: { language: string }) => ReturnType
            /**
             * Toggle a code block
             * @param attributes Code block attributes
             * @example editor.commands.toggleCodeBlock({ language: 'javascript' })
             */
            toggleCodeBlock: (attributes?: { language: string }) => ReturnType
        }
    }
}

/**
 * Matches a code block with backticks.
 */
export const backtickInputRegex = /^```(\S*)[\s\n]$/

/**
 * Matches a code block with tildes.
 */
export const tildeInputRegex = /^~~~(\S*)[\s\n]$/

/**
 * This extension allows you to create code blocks.
 * @see https://tiptap.dev/api/nodes/code-block
 */
export const CodeBlock = Node.create<CodeBlockOptions>({
    name: 'codeBlock',

    addOptions() {
        return {
            languageClassPrefix: 'language-',
            exitOnTripleEnter: true,
            exitOnArrowDown: true,
            defaultLanguage: null,
            HTMLAttributes: {},
        }
    },

    content: 'text*',

    marks: '',

    group: 'block',

    code: true,

    defining: true,

    addCommands() {
        return {
            setCodeBlock:
                attributes => ({ commands }) => {
                    return commands.setNode(this.name, attributes)
                },
            toggleCodeBlock:
                attributes => ({ commands }) => {
                    return commands.toggleNode(this.name, 'paragraph', attributes)
                },
        }
    },

    addKeyboardShortcuts() {
        return {
            'Mod-Alt-c': () => this.editor.commands.toggleCodeBlock(),

            // remove code block when at start of document or code block is empty
            Backspace: () => {
                const { empty, $anchor } = this.editor.state.selection
                const isAtStart = $anchor.pos === 1

                if (!empty || $anchor.parent.type.name !== this.name) {
                    return false
                }

                if (isAtStart || !$anchor.parent.textContent.length) {
                    return this.editor.commands.clearNodes()
                }

                return false
            },

            // exit node on triple enter
            Enter: ({ editor }) => {
                if (!this.options.exitOnTripleEnter) {
                    return false
                }

                const { state } = editor
                const { selection } = state
                const { $from, empty } = selection

                if (!empty || $from.parent.type !== this.type) {
                    return false
                }

                const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2
                const endsWithDoubleNewline = $from.parent.textContent.endsWith('\n\n')

                if (!isAtEnd || !endsWithDoubleNewline) {
                    return false
                }

                return editor
                    .chain()
                    .command(({ tr }) => {
                        tr.delete($from.pos - 2, $from.pos)

                        return true
                    })
                    .exitCode()
                    .run()
            },

            // exit node on arrow down
            ArrowDown: ({ editor }) => {
                if (!this.options.exitOnArrowDown) {
                    return false
                }

                const { state } = editor
                const { selection, doc } = state
                const { $from, empty } = selection

                if (!empty || $from.parent.type !== this.type) {
                    return false
                }

                const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2

                if (!isAtEnd) {
                    return false
                }

                const after = $from.after()

                if (after === undefined) {
                    return false
                }

                const nodeAfter = doc.nodeAt(after)

                if (nodeAfter) {
                    return editor.commands.command(({ tr }) => {
                        tr.setSelection(Selection.near(doc.resolve(after)))
                        return true
                    })
                }

                return editor.commands.exitCode()
            },
        }
    },

    addInputRules() {

        // TODO: allow client extensions to this
        const extToLanguageMap: Record<string, string> = {
            js: 'javascript',
            ts: 'javascript',
            jsx: 'javascript',
            tsx: 'javascript',
            py: 'python',
            rb: 'ruby',
            php: 'php',
            java: 'java',
            cpp: 'cpp',
            c: 'c',
            cs: 'csharp',
            go: 'go',
            swift: 'swift',
            kt: 'kotlin',
            rs: 'rust',
            scala: 'scala',
            m: 'objectivec',
            vb: 'vb',
            hs: 'haskell',
            lua: 'lua',
            pl: 'perl',
            sh: 'bash',
            sql: 'sql',
            html: 'html',
            css: 'css',
            scss: 'scss',
            less: 'less',
            json: 'json',
            yaml: 'yaml',
            xml: 'xml',
            md: 'markdown',
            toml: 'toml',
            ini: 'ini',
            conf: 'ini',
            log: 'ini',
            env: 'ini',
            dockerfile: 'dockerfile',
            makefile: 'makefile',
            dockerignore: 'gitignore',
            gitignore: 'gitignore',
        }

        const getAttributes = (match: RegExpMatchArray) => {
            const languageOrPath = match[1]
            const split = languageOrPath.split('.')
            const ext = split.length > 1 ? split.pop() : undefined
            const language = ext ? (extToLanguageMap[ext] || ext) : languageOrPath

            console.log('getting attributes', { language, ext, languageOrPath })

            return {
                language,
                filepath: ext ? languageOrPath : null, // Store as filepath only if it has an extension
            }
        }

        return [
            textblockTypeInputRule({
                find: backtickInputRegex,
                type: this.type,
                getAttributes
            }),
            textblockTypeInputRule({
                find: tildeInputRegex,
                type: this.type,
                getAttributes
            }),
        ]
    },

    addProseMirrorPlugins() {
        return [
            // this plugin creates a code block for pasted content from VS Code
            // we can also detect the copied code language
            new Plugin({
                key: new PluginKey('codeBlockVSCodeHandler'),
                props: {
                    handlePaste: (view, event) => {
                        if (!event.clipboardData) {
                            return false
                        }

                        // don’t create a new code block within code blocks
                        if (this.editor.isActive(this.type.name)) {
                            return false
                        }

                        const text = event.clipboardData.getData('text/plain')
                        const vscode = event.clipboardData.getData('vscode-editor-data')
                        const vscodeData = vscode ? JSON.parse(vscode) : undefined
                        const language = vscodeData?.mode

                        if (!text || !language) {
                            return false
                        }

                        const { tr, schema } = view.state

                        // prepare a text node
                        // strip carriage return chars from text pasted as code
                        // see: https://github.com/ProseMirror/prosemirror-view/commit/a50a6bcceb4ce52ac8fcc6162488d8875613aacd
                        const textNode = schema.text(text.replace(/\r\n?/g, '\n'))

                        // create a code block with the text node
                        // replace selection with the code block
                        tr.replaceSelectionWith(this.type.create({ language }, textNode))

                        if (tr.selection.$from.parent.type !== this.type) {
                            // put cursor inside the newly created code block
                            tr.setSelection(TextSelection.near(tr.doc.resolve(Math.max(0, tr.selection.from - 2))))
                        }

                        // store meta information
                        // this is useful for other plugins that depends on the paste event
                        // like the paste rule plugin
                        tr.setMeta('paste', true)

                        view.dispatch(tr)

                        return true
                    },
                },
            }),
        ]
    },
})