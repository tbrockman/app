<template>
    <div
        ref="editorWrapper"
        v-shortkey="shortkeyOptions"
        @shortkey="shortkeyHandler"
    >
        <editor-bubble-menu
            v-if="editorInstance"
            :should-show="shouldShowBubbleMenu"
            :tippy-options="{ maxWidth: 450, duration: 200 }"
            :editor="editorInstance"
        >
            <BubbleMenu
                ref="bubbleMenu"
                :visible="!mousedown"
                :editor="editorInstance"
                :utils="editor?.utils"
                :document-id="docId"
            />
        </editor-bubble-menu>
        <editor-content
            class="editor"
            data-e2e="editor-instance"
            :editor="editorInstance"
            :spellcheck="$store.getters['appSettings/editorOptions'].spellcheck"
            autocomplete="off"
        />
    </div>
</template>

<script lang="ts">
import {
    Component,
    Inject,
    InjectReactive,
    Prop,
    Vue,
    Watch,
} from 'vue-property-decorator';
import {
    BubbleMenu as EditorBubbleMenu,
    Editor as TipTapEditor,
    EditorContent,
} from '@tiptap/vue-2';
import { FocusPosition } from '@tiptap/core';
import { v4 } from 'uuid';
import { Node } from '@tiptap/pm/model';
import isEqual from 'lodash/isEqual';
import { INLINE_DOCUMENT_LINK_NODE_NAME } from './extensions/inline-document-link';
import { INLINE_EVENT_NODE_NAME } from './extensions/inline-event';
import { Editor } from '@/components/editor/editor';
import { EditorContext } from '~/@types/app';
import { EditorTypes } from '~/constants';
import BubbleMenu from '~/components/editor/bubble-menu/BubbleMenu.default.vue';
import { TabSymbols } from '~/constants/symbols';
import { MERMAID_NODE_NAME } from '~/components/editor/extensions/mermaid';
import { BLOCK_KATEX_NODE_NAME } from '~/components/editor/extensions/katex';
import { blockPasteRulesPlugin } from '~/components/editor/extensions/mdpaste/block';
import { blockPasteRules } from '~/components/editor/extensions/mdpaste';

@Component({
    name: 'EditorComponent',
    components: {
        EditorContent,
        BubbleMenu,
        EditorBubbleMenu,
    },
})
export default class EditorComponent extends Vue {
    @Prop({ required: true })
    value!: string;

    @Prop({ default: true })
    editable!: boolean;

    @Prop({ default: `Type '/' for commands` })
    placeholder!: string;

    @Prop({ default: undefined })
    docId!: string | undefined;

    @Prop({ default: undefined })
    groupId!: string | undefined;

    @Prop({ default: false })
    recreateOnIdUpdate!: boolean;

    @Inject({ from: TabSymbols.TAB_ID, default: null })
    tabId!: string | null;

    @Inject({ from: TabSymbols.SET_SCROLL_POSITION, default: null })
    setScrollPosition!: ((position: number, label?: string) => void) | null;

    @Inject({ from: TabSymbols.GET_SCROLL_POSITION, default: null })
    getScrollPosition!: ((label?: string) => number) | null;

    editor: Editor | null = null;
    mousedown: boolean = false;
    editorCreated: boolean = false;

    editorId: string = v4();

    $refs!: {
        bubbleMenu: BubbleMenu;
        editorWrapper: HTMLDivElement;
    };

    get editorInstance() {
        return this.editor?.editor ?? null;
    }

    get isActive() {
        return this.tabId === this.$utils.navigation.activeTabId;
    }

    @Watch('value')
    handleValueChange(value: string) {
        this.editor?.updateContent(value);
    }

    @Watch('editable')
    onEditableWatch(editable: boolean) {
        this.editor?.setEditable(editable);
    }

    @Watch('docId')
    handleDocIdUpdate(value: string) {
        if (this.recreateOnIdUpdate) {
            this.editor?.destroy();
            this.createEditor(this.value);
            return;
        }

        // @ts-ignore
        this.editorInstance?.commands.setImageDocumentId(value);
        // this.editorInstance?.commands.setTaskDocumentId(value);
        this.editorInstance?.commands.setAutocompleteDocumentId(value);
        this.editor?.resetEditorContent(this.value); // ??? racecondi
    }

    @Watch('$route.params.id')
    onValueUpdate() {
        this.editor?.resetEditorContent(this.value);
    }

    @Watch('isContextMenuOpen')
    handleContextMenuOpen(next: boolean, prev: boolean) {
        if (this.$utils.isMobile) return;
        if (next) {
            this.blurEditor();
        }
        this.shouldFocus(next, prev);
    }

    @Watch('isModalOpen')
    shouldFocus(next: boolean, prev: boolean) {
        if (prev && !next && !this.$store.getters.userForcedBlur) {
            const lastPos =
                this.editorInstance?.storage.lastFocusPosition.value;
            this.editor?.utils.focusEditor(lastPos);
        }
    }

    @Watch('searchState', { deep: true })
    searchUpdated(newVal: any, oldVal: any) {
        if (isEqual(newVal, oldVal)) return;

        if (this.tabId) {
            this.$emit('update:tab-data', {
                searchResultsAmount: newVal.searchResultsAmount,
                searchCurrentIndex: newVal.searchCurrentIndex + 1,
            });
            return;
        }

        this.$store.dispatch(
            'documentSearch/setNumResults',
            newVal.searchResultsAmount,
        );
        this.$store.dispatch(
            'documentSearch/setCurrentIndex',
            newVal.currentIndex + 1,
        );
    }

    shouldShowBubbleMenu() {
        if (!this.editable) return false;
        if (this.$utils.isMobile) return false;
        const isEmptySelection = this.editorInstance?.state.selection.empty;
        if (isEmptySelection) return false;

        const output =
            !this.editorInstance?.isActive(BLOCK_KATEX_NODE_NAME) &&
            !this.editorInstance?.isActive('image') &&
            !this.editorInstance?.isActive('codeBlock') &&
            !this.editorInstance?.isActive('horizontalRule') &&
            !this.editorInstance?.isActive(INLINE_DOCUMENT_LINK_NODE_NAME) &&
            !this.editorInstance?.isActive(INLINE_EVENT_NODE_NAME) &&
            !this.editorInstance?.isActive(MERMAID_NODE_NAME) &&
            !this.editorInstance?.isActive('imageComponent') &&
            !this.editorInstance?.isActive('youtube') &&
            this.editor?.shouldShowBubbleMenu();

        return output;
    }

    get shortkeyOptions() {
        if (!this.editable) return null;
        const namespaces = this.$shortcutsManager.currentNamespaces;
        const focusShortkey = { focus: ['enter'] };
        if (
            !this.$vfm.dynamicModals.length &&
            !this.$vfm.openedModals.length &&
            !this.$store.getters.editorFocused &&
            !namespaces['review-panel'] &&
            !namespaces.dropdown &&
            this.isActive
        ) {
            return focusShortkey;
        }
        return null;
    }

    get isContextMenuOpen() {
        return !!this.$contextMenu.contextMenu;
    }

    get isModalOpen() {
        return this.$vfm.openedModals.length > 0;
    }

    get searchState() {
        return this.editorInstance?.storage.search;
    }

    get autofocusPosition() {
        if (this.$utils.isMobile) return null;
        if (!this.getScrollPosition) return;
        return this.getScrollPosition('editor') ?? undefined;
    }

    createEditor(content: string) {
        const context: EditorContext = {
            editorId: this.editorId,
            documentId: this.docId!,
            groupId: this.groupId,
            config: {
                editable: this.editable,
                placeholder: this.placeholder,
                starterKit: {
                    heading: false,
                    hardBreak: false,
                    dropcursor: {
                        color: '#677589',
                        width: 2,
                        class: 'drop-cursor',
                    },
                    listItem: false,
                    code: false,
                    codeBlock: false,
                },
                todo: {
                    documentId: this.docId,
                },
                image: {
                    documentId: this.docId,
                },
                autocomplete: {
                    documentId: this.docId,
                },
                keyboardUtils: {
                    documentId: this.docId,
                },
                event: {},
            },
            bubbleMenuExceptions: new Set(['horizontalRule']),
            emit: (key: string, val?: any) => this.$emit(key, val),
            nextTick: (callback: () => void) => this.$nextTick(callback),
            store: this.$store,
            cloudService: this.$cloudService,
            serviceRegistry: this.$serviceRegistry,
            shortcutsManager: this.$shortcutsManager,
            nuxt: this.$nuxt,
            vfm: this.$vfm,
            router: this.$router,
            tabs: this.$tabs,
            entities: this.$entities,
            tracking: this.$tracking,
            onSelectionUpdate: () => {
                if (this.$refs.bubbleMenu) {
                    this.$refs.bubbleMenu.convertToMenuActive = false;
                    this.$refs.bubbleMenu.miscMenuActive = false;
                    this.$refs.bubbleMenu.highlightColorMenuActive = false;
                    this.$refs.bubbleMenu.editingLink = false;
                    this.$refs.bubbleMenu.linkText = '';
                }
            },
            onCreate: ({ editor }: { editor: TipTapEditor }) => {
                this.resetSearch();

                const { state, view } = editor;

                if (state.plugins.length > 0) {
                    const restOfPlugins: any[] = [];
                    const suggestionPlugins: any[] = [];

                    state.plugins.forEach(plugin => {
                        if (
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore: The `Plugin` type does not include `key`
                            (plugin.key as string).includes('label')
                        ) {
                            suggestionPlugins.push(plugin);
                        } else {
                            restOfPlugins.push(plugin);
                        }
                    });

                    const [inputPlugin, ...rest] = restOfPlugins;
                    view.updateState(
                        state.reconfigure({
                            plugins: [
                                ...suggestionPlugins,
                                inputPlugin,
                                ...blockPasteRulesPlugin({
                                    editor,
                                    rules: blockPasteRules(context),
                                }),
                                ...rest,
                            ],
                        }),
                    );
                }

                const dom = editor.view.dom;
                if (!dom) {
                    return;
                }
                dom.addEventListener('mousedown', this.viewMouseDownHandler);
                this.$emit('editor:ready');
            },
            editor: (): TipTapEditor | null => {
                return this.editor?.editor ?? null;
            },
            autofocusPosition: this.autofocusPosition!,
            onPositionChange: (pos: number) => {
                if (this.$utils.isMobile || !this.setScrollPosition) return;
                this.setScrollPosition(pos, 'editor');
            },
            onDestroy: [],
        };

        this.editor = new Editor(content, context, EditorTypes.FULL);
    }

    @Watch('isActive')
    handleIsActive(val: boolean) {
        if (!val || !this.editorCreated) {
            return;
        }
        if (
            this.$store.getters.userForcedBlur ||
            this.editor?.editor?.view.hasFocus()
        )
            return;

        const focus = () => {
            this.$nextTick(() => {
                this.editor?.utils.focusEditor(
                    this.editorInstance?.storage.lastFocusPosition.value ||
                        'end',
                );
            });
        };
        if (!this.editor?.editor?.isEditable) {
            return;
        }

        focus();
    }

    scrollPageToBottom() {
        this.$emit('scroll-to-bottom');
    }

    viewMouseDownHandler() {
        this.mousedown = true;
        window.addEventListener('mouseup', this.viewMouseUpHandler);
    }

    viewMouseUpHandler() {
        setTimeout(() => {
            this.mousedown = false;
        }, 100);
        window.removeEventListener('mouseup', this.viewMouseUpHandler);
    }

    shortkeyHandler(event: any) {
        if (this.$vfm.openedModals.length > 0) return;
        switch (event.srcKey) {
            case 'focus':
                if (this.$store.getters.editorFocused) return;
                this.focusEditor(
                    this.editorInstance?.storage.lastFocusPosition.value ||
                        'start',
                );
                break;
        }
    }

    focusEditor(pos: FocusPosition) {
        this.editor?.utils.focusEditor(pos);
    }

    blurEditor() {
        this.editor?.utils.blurEditor();
    }

    focusEditorAtCoords(left: number, top: number) {
        this.editor?.utils.focusEditorAtCoords(left, top);
    }

    focusTask(id: string) {
        this.editor?.utils.focusTask(id);
    }

    clearHistory(content: string) {
        this.editor?.resetEditorContent(content);
    }

    mounted() {
        this.$once('create', () => {
            if (this.isActive) {
                this.$nuxt.$emit(`smart-focus-${this.tabId}`);
            }
            this.editorCreated = true;
        });

        this.createEditor(this.value);

        this.resetSearch();
        this.unregisterDocumentSearchHandlers();
        this.registerDocumentSearchHandlers();

        // TODO: JIRA NEEDS REWORK
        this.$nuxt.$on('editor:delete-entity', (id: string) => {
            const result = this.editor?.utils.findEntityPos(
                (node: Node) => node.attrs.id === id,
            );
            if (result && (result.pos || result.pos === 0)) {
                this.editorInstance
                    ?.chain()
                    .setNodeSelection(result.pos)
                    .deleteSelection()
                    .run();
            }
        });

        // TODO: JIRA NEEDS REWORK
        this.$nuxt.$on('editor:add-entity-start', (entity: string) => {
            const pos = this.editorInstance?.state.doc.resolve(0)!;
            this.editorInstance?.commands.insertContentAt(pos.pos, entity);
        });
    }

    get tabData() {
        return this.$store.getters['tabs/byId'](this.tabId)?.data ?? {};
    }

    get searchOpen() {
        if (this.tabData) {
            return this.tabData.searchOpen;
        }
        return this.$store.getters['documentSearch/open'];
    }

    beforeDestroy() {
        const element = this.$el.getElementsByClassName('editor')[0];
        if (element) {
            const copy = element.cloneNode(true);
            this.$refs.editorWrapper.insertBefore(
                copy,
                this.$refs.editorWrapper.firstChild,
            );
        }

        this.resetSearch();
        if (this.editable) {
            this.$store.commit('editorFocused', false);
        }
        if (this.searchOpen) {
            if (this.tabData) {
                return;
            }
            this.$store.dispatch('documentSearch/close');
        }
        this.unregisterDocumentSearchHandlers();

        this.editor?.destroy();
    }

    /**
     * SEARCH
     */

    getEmitKey(key: string) {
        if (this.tabData) {
            return `${key}:${this.tabId}`;
        }
        return key;
    }

    registerDocumentSearchHandlers() {
        this.$nuxt.$on(
            this.getEmitKey('documentSearch:termUpdated'),
            this.updateSearch,
        );
        this.$nuxt.$on(
            this.getEmitKey('documentSearch:nextResult'),
            this.selectNextResult,
        );
        this.$nuxt.$on(
            this.getEmitKey('documentSearch:prevResult'),
            this.selectPrevResult,
        );
        this.$nuxt.$on(
            this.getEmitKey('documentSearch:focusSelected'),
            this.focusSelectedResult,
        );
        this.$nuxt.$on(
            this.getEmitKey('documentSearch:searchOpen'),
            this.searchForSelection,
        );
        this.$nuxt.$on(
            this.getEmitKey('documentSearch:searchClose'),
            this.closeSearch,
        );
    }

    unregisterDocumentSearchHandlers() {
        this.$nuxt.$off(this.getEmitKey('documentSearch:termUpdated'));
        this.$nuxt.$off(this.getEmitKey('documentSearch:nextResult'));
        this.$nuxt.$off(this.getEmitKey('documentSearch:prevResult'));
        this.$nuxt.$off(this.getEmitKey('documentSearch:focusSelected'));
        this.$nuxt.$off(this.getEmitKey('documentSearch:searchOpen'));
        this.$nuxt.$off(this.getEmitKey('documentSearch:searchClose'));
    }

    resetSearch() {
        this.editorInstance?.commands?.setSearchTerm('');
    }

    focusSelectedResult() {
        const selectionPosition =
            this.tabData?.selectedNodePosition ??
            this.$store.getters['documentSearch/selectedNodePosition'];
        if (
            selectionPosition &&
            selectionPosition.from &&
            selectionPosition.to
        ) {
            this.editorInstance?.commands.focus(selectionPosition.to);
            this.editorInstance?.commands?.setTextSelection(selectionPosition);
        } else {
            this.editor?.utils.focusEditor('start');
        }
    }

    searchForSelection() {
        const selectedText = this.editorInstance?.view.state.selection;
        if (selectedText && !selectedText.empty) {
            const { from, to } = selectedText;
            const text = this.editorInstance?.state.doc.textBetween(
                from,
                to,
                ' ',
            );
            if (this.tabId) {
                this.$emit('update:tab-data', { searchTerm: text?.trim() });
                return;
            }
            this.$store.dispatch('documentSearch/setTerm', text?.trim());
        }
    }

    closeSearch() {
        this.editorInstance?.commands?.setSearchTerm('');
        this.$emit('update:tab-data', {
            searchOpen: false,
            searchFocus: false,
            searchTerm: '',
            searchResultsAmount: 0,
            searchCurrentIndex: 0,
            selectedNodePosition: null,
        });
    }

    updateSearch() {
        if (!this.searchOpen) return;
        const searchTerm =
            this.tabData.searchTerm ??
            this.$store.getters['documentSearch/term'];

        if (this.searchOpen) {
            try {
                this.editorInstance?.commands?.setSearchTerm(searchTerm);
                this.scrollSelectionIntoView();
            } catch (error) {
                this.$sentry.captureException(error);
                console.log(error);
            }
        } else if (searchTerm !== '') {
            try {
                this.editorInstance?.commands?.setSearchTerm('');
            } catch (error) {
                this.$sentry.captureException(error);
                console.log(error);
            }
        }
    }

    selectPrevResult() {
        const activeTab = this.$store.getters['tabs/activeTab'];
        if (activeTab.id !== this.tabId || !this.searchOpen) return;
        try {
            this.editorInstance?.commands?.selectPrevResult();
            this.scrollSelectionIntoView();
        } catch (error) {
            this.$sentry.captureException(error);
            console.log(error);
        }
    }

    selectNextResult() {
        const activeTab = this.$store.getters['tabs/activeTab'];
        if (activeTab.id !== this.tabId || !this.searchOpen) return;
        try {
            this.editorInstance?.commands?.selectNextResult();
            this.scrollSelectionIntoView();
        } catch (error) {
            this.$sentry.captureException(error);
            console.log(error);
        }
    }

    scrollSelectionIntoView() {
        const selectedNode =
            this.editorInstance?.storage.search.selectedNodePosition;
        if (this.tabId) {
            this.$emit('update:tab-data', {
                selectedNodePosition: selectedNode,
            });
        } else {
            this.$store.dispatch(
                'documentSearch/setSelectedNodePosition',
                selectedNode,
            );
        }
        const editor = document.getElementById('editor-wrapper');
        if (editor && selectedNode) {
            try {
                const dom = this.editorInstance?.view?.domAtPos(
                    selectedNode.from,
                    0,
                );
                if (dom && dom.node) {
                    let offsetToScroll = 0;
                    let parent =
                        dom.node.childNodes![Math.max(dom.offset, 0)].firstChild
                            ?.parentElement;
                    let lastOffset = 0;
                    while (parent?.parentElement?.className !== 'editor') {
                        if (parent?.offsetTop) {
                            offsetToScroll += parent?.offsetTop - lastOffset;
                            lastOffset = parent?.offsetTop;
                        }

                        parent = parent?.parentElement;
                    }
                    editor.scrollTop = offsetToScroll;
                }
            } catch (error) {
                this.$sentry.captureException(error);
                console.log(error);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
:deep(.ProseMirror p.is-editor-empty:first-child::before) {
    content: attr(data-placeholder);
    float: left;
    pointer-events: none;
    height: 0;
    color: var(--editor-placeholder-color);
    font-weight: normal;
    font-size: 16px;
    line-height: 175.2%;
}

:deep(.ProseMirror) {
    @include inputMetaStyles;
    @include editorStyling;
}

@keyframes shine {
    to {
        background-position: calc(100% + 510px) 0;
    }
}
</style>
