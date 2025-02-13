import { Editor as TipTapEditor, EditorOptions } from '@tiptap/vue-2';
import { ParseOptions } from '@tiptap/pm/model';
import { EditorState } from '@tiptap/pm/state';
import debounce from 'lodash/debounce';
import { EditorContext, EditorContextConfig } from '~/@types/app';
import { EditorTypes } from '~/constants';
import { extensions } from '~/components/editor/extensions';
import { EditorUtils } from '~/components/editor/utils';

import '~/components/editor/extensions/github-link';
import '~/components/editor/extensions/github-search';
import '~/components/editor/extensions/jira-link';
import '~/components/editor/extensions/jira-search';
import '~/components/editor/extensions/linear-search';
import '~/components/editor/extensions/linear-link';
import '~/components/editor/extensions/label';
import '~/components/editor/extensions/label/decoration';
import '~/components/editor/extensions/key-up-handler';
import '~/components/editor/extensions/starter-kit';
import '~/components/editor/extensions/list-item';
import '~/components/editor/extensions/inline-event';
import '~/components/editor/extensions/gap-cursor-focus';
import '~/components/editor/extensions/acreom-heading';
import '~/components/editor/extensions/trailing-node';
import '~/components/editor/extensions/table';
import '~/components/editor/extensions/code';
import '~/components/editor/extensions/codeblock';
import '~/components/editor/extensions/unique-id';
import '~/components/editor/extensions/highlight';
import '~/components/editor/extensions/superscript';
import '~/components/editor/extensions/subscript';
import '~/components/editor/extensions/katex';
import '~/components/editor/extensions/last-focus-position';
import '~/components/editor/extensions/link';
import '~/components/editor/extensions/underline';
import '~/components/editor/extensions/inline-document-link';
import '~/components/editor/extensions/focus';
import '~/components/editor/extensions/search';
import '~/components/editor/extensions/image';
import '~/components/editor/extensions/placeholder';
import '~/components/editor/extensions/autocomplete';
import '~/components/editor/extensions/click-utils';
import '~/components/editor/extensions/keyboard-utils';
import '~/components/editor/extensions/mermaid';
import '~/components/editor/extensions/youtube';
import '~/components/editor/extensions/template-picker';
import '~/components/editor/extensions/apps';
import '~/components/editor/extensions/task-list';
import '~/components/editor/extensions/task-item';
import '~/components/editor/extensions/clipboard';
import '~/components/editor/extensions/kbd';
import '~/components/editor/extensions/diff';

const defaultEditorConfig = (): Partial<EditorContextConfig> => ({
    editable: true,
    placeholder: `Type '/' for commands`,
    highlight: {
        HTMLAttributes: {
            class: 'text-highlight',
        },
        multicolor: true,
    },
    table: {
        resizable: true,
    },
    codeblock: {
        defaultLanguage: null,
    },
    uniqueId: {
        types: [
            'heading',
            'blockquote',
            'mermaid-component',
            'taskItemContent',
        ],
    },
    taskItem: {
        nested: true,
    },
});

export class Editor {
    editor: TipTapEditor;
    context: EditorContext;
    type: EditorTypes;
    utils: EditorUtils;
    isReady: boolean = false;

    constructor(content: string, ctx: EditorContext, type: EditorTypes) {
        // type = Full/Minimal
        this.context = ctx;
        this.type = type;
        this.context.config = { ...defaultEditorConfig(), ...ctx.config }; // TODO DEEP MERGE
        this.editor = this.createEditor(content);
        this.editor.storage.groupId = { value: this.context.groupId };
        this.utils = new EditorUtils(this.editor, this.context);
        this.context.utils = this.utils;
        this.registerEditorFocusHandlers();
    }

    /**
     * Essential
     */
    createEditor(content: string) {
        const debouncedUpdate = debounce(
            (editor: TipTapEditor) => {
                this.context.emit('update:html', editor.getHTML());
            },
            250,
            {
                maxWait: 1500,
                trailing: true,
                leading: true,
            },
        );

        const extensionsWithContext = extensions
            .filter(extension => {
                return (
                    extension.type === EditorTypes.BASIC ||
                    extension.type === this.type
                );
            })
            .map(extension => extension.createInstance(this.context))
            .reduce((acc: any[], ext) => {
                if (Array.isArray(ext)) {
                    return [...acc, ...ext];
                }
                return [...acc, ext];
            }, []);

        const tipTapConfig = {
            content: content || '<p></p>',
            editable: this.context.config.editable,
            extensions: extensionsWithContext,
            onUpdate: ({ editor }) => {
                debouncedUpdate(editor as TipTapEditor);
            },
            onCreate: args => {
                this.isReady = true;
                this.context.emit('create');
                if (this.context.onCreate) {
                    this.context.onCreate(args);
                }
            },
            onTransaction: args => {
                if (this.context.onTransaction) {
                    this.context.onTransaction(args);
                }
            },
            onSelectionUpdate: (args: any) => {
                if (this.context.onSelectionUpdate) {
                    this.context.onSelectionUpdate(args);
                }
                this.lastFocusPosition = args.transaction.selection.from;
            },
            onDestroy: () => {
                this.context.onDestroy.forEach(cb => cb());
            },
        } as Partial<EditorOptions>;
        if (this.context.autofocusPosition) {
            tipTapConfig.autofocus = this.context.autofocusPosition;
        }

        const editor = new TipTapEditor(tipTapConfig);

        editor.storage.lastFocusPosition.value = editor.state.selection.anchor;

        this.utils = new EditorUtils(editor, this.context);

        return editor;
    }

    shouldShowBubbleMenu() {
        return [...this.context.bubbleMenuExceptions].every(
            nodeName => !this.editor.isActive(nodeName),
        );
    }

    get lastFocusPosition() {
        return this.editor?.storage?.lastFocusPosition?.value;
    }

    set lastFocusPosition(value: number | string) {
        if (!this.editor) return;
        if (this.isReady) {
            this.context.onPositionChange(value as number);
        }
        this.editor.storage.lastFocusPosition.value = value;
    }

    updateContent(
        content: string,
        emitUpdate: boolean = false,
        parseOptions: ParseOptions = { preserveWhitespace: 'full' },
    ): void {
        const isSame = this.editor.getHTML() === content;
        if (isSame) return;
        this.editor.commands.setContent(content, emitUpdate, parseOptions);
    }

    resetEditorContent(
        content: string,
        emitUpdate: boolean = false,
        parseOptions: ParseOptions = { preserveWhitespace: 'full' },
    ) {
        this.editor.commands.setContent(content, emitUpdate, parseOptions);
        const newEditorState = EditorState.create({
            doc: this.editor.state.doc,
            plugins: this.editor.state.plugins,
            schema: this.editor.state.schema,
        });

        this.editor.view.updateState(newEditorState);
    }

    destroy() {
        if (this.context.config.editable) {
            this.context.store.commit('editorFocused', false);
        }
        this.context.nuxt.$off('heading:click');
        this.context.nuxt.$off('editor:focus', this.focusHandler);
        this.context.nuxt.$off('editor:blur', this.blurHandler);
        this.context.nuxt.$off('editor:tab-group-blur', this.blurEditor);
        this.context.nuxt.$off(`assistant:summary-${this.context.groupId}`);
        this.context.nuxt.$off(`assistant:mermaid-${this.context.groupId}`);

        this.editor.destroy();
    }

    /**
     * Utils
     */
    setEditable(editable: boolean) {
        this.editor.setEditable(editable);
        this.context.config.editable = editable;
    }

    clearHistory(content: string): void {
        this.destroy();
        this.editor = this.createEditor(content);
        this.registerEditorFocusHandlers();
    }

    registerEditorFocusHandlers() {
        this.context.nuxt.$on('heading:click', ({ id }: any) => {
            if (
                this.context.groupId !==
                this.context.store.getters['tabs/activeGroup'].id
            ) {
                return;
            }
            this.utils.focusHeading(id);
        });

        this.editor.on('focus', () => {
            if (this.context.config.editable) {
                this.context.store.commit('editorFocused', true);
            }
            this.context.store.commit('userForcedBlur', false);
            this.context.shortcutsManager.disableNamespace('editor-inactive');
            this.context.nuxt.$emit('editor:isFocused');
        });

        this.editor?.on('blur', () => {

            // if the editor's children also aren't focused, then we enable the namespace
            if (this.editor.view.dom.contains(document.activeElement)) {
                return;
            }

            if (this.context.config.editable) {
                this.context.store.commit('editorFocused', false);
            }

            this.context.shortcutsManager.enableNamespace('editor-inactive');
            this.editor.storage.lastFocusPosition.value = this.editor?.state
                .selection.anchor as number;
            this.context.nuxt.$emit('editor:isBlurred');
        });

        this.context.nuxt.$on('editor:focus', this.focusHandler.bind(this));

        this.blurEditor = this.blurEditor.bind(this);
        this.context.nuxt.$on('editor:tab-group-blur', this.blurEditor);

        this.context.nuxt.$on('editor:blur', this.blurHandler.bind(this));

        this.context.nuxt.$on(
            `assistant:summary-${this.context.groupId}`,
            () => {
                if (
                    this.context.groupId !==
                    this.context.store.getters['tabs/activeGroup'].id
                ) {
                    return;
                }
                return this.utils.assistant.makeSummary();
            },
        );

        this.context.nuxt.$on(
            `assistant:mermaid-${this.context.groupId}`,
            () => {
                if (
                    this.context.groupId !==
                    this.context.store.getters['tabs/activeGroup'].id
                ) {
                    return;
                }
                return this.utils.assistant.makeMermaid();
            },
        );
    }

    focusHandler(pos?: string | number) {
        if (this.context.store.getters.editorFocused) return;
        if (
            !this.context.nuxt.$utils.isMobile &&
            this.context.groupId !==
            this.context.store.getters['tabs/activeGroup'].id
        ) {
            return;
        }
        this.utils.focusEditor(
            pos || this.editor.storage.lastFocusPosition.value || 'start',
        );
    }

    blurHandler() {
        if (!this.context.store.getters.editorFocused) return;
        if (
            !this.context.nuxt.$utils.isMobile &&
            this.context.groupId !==
            this.context.store.getters['tabs/activeGroup'].id
        ) {
            return;
        }
        this.editor?.commands.blur();
    }

    blurEditor() {
        this.context.utils?.editor?.commands.blur();
    }
}
