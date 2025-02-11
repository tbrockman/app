<template>
    <div class="convert-menu" :class="{ visible }" @mousedown="handleMouseDown">
        <button @click="convertToParagraph">
            <AcreomParagraph size="14" class="icon" />
            Paragraph
        </button>
        <button @click="convertToHeading(1)">
            <AcreomHeading1 size="14" class="icon" />
            Heading 1
        </button>
        <button @click="convertToHeading(2)">
            <AcreomHeading2 size="14" class="icon" />
            Heading 2
        </button>
        <button @click="convertToHeading(3)">
            <AcreomHeading3 size="14" class="icon" />
            Heading 3
        </button>
        <button
            v-if="!listSelected"
            :disabled="!selectionLength"
            data-e2e="convert-to-task"
            @click="createTaskFromContent"
        >
            <InterfaceValidationCheck size="14" class="icon" />
            Task
            <div class="convert-menu--tip">
                <TooltipKeys
                    :keybind="
                        $shortcutsManager.keybinds[
                            $shortcutsManager.availableShortcuts.CONVERT_TO_TASK
                        ].keybind
                    "
                />
            </div>
        </button>
        <button
            v-if="listSelected"
            :disabled="!selectionLength"
            @click="createTaskListFromContent"
        >
            <InterfaceValidationCheck size="14" class="icon" />
            <div class="tasklist-name">
                <p class="tasklist-name--tasklist">Task List</p>
                <p
                    v-if="listName !== '' && listName !== 'Multiple'"
                    class="tasklist-name--label"
                >
                    #{{ listName }}
                </p>
            </div>
        </button>
        <button :disabled="!selectionLength" @click="createDocumentFromContent">
            <InterfaceContentFileAlternate size="14" class="icon" />
            Page Link
            <div class="convert-menu--tip">
                <TooltipKeys
                    :keybind="
                        $shortcutsManager.keybinds[
                            $shortcutsManager.availableShortcuts
                                .CONVERT_TO_DOCUMENT
                        ].keybind
                    "
                />
            </div>
        </button>
        <button @click="convertToList">
            <InterfaceTextFormattingListBullets size="14" class="icon" />
            List
        </button>
        <button :disabled="!selectionLength" @click="convertToCodeBlock">
            <ProgrammingBrowserCode1 size="14" class="icon" />
            Code Block
        </button>
        <button @click="convertToTemplate">
            <AcreomTemplate class="icon" />
            New Template
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
    CheckIcon,
    ColorSwatchIcon,
    DocumentIcon,
    TerminalIcon,
    ViewListIcon,
} from '@vue-hero-icons/solid';
import { CommandProps, Editor, generateHTML, JSONContent } from '@tiptap/core';
import { v4 } from 'uuid';
import { Level } from '@tiptap/extension-heading';
import { NodeSelection } from '@tiptap/pm/state';
import { DOMSerializer } from '@tiptap/pm/model';
import { INLINE_DOCUMENT_LINK_NODE_NAME } from '~/components/editor/extensions/inline-document-link';
import { IDocument } from '~/components/document/model';
import {
    Header1Icon,
    Header2Icon,
    Header3Icon,
    ParagraphIcon,
} from '~/components/icons';
import {
    CloudServiceAction,
    NotificationActions,
    ServiceKey,
    TabType,
    UtilActions,
} from '~/constants';
import { INLINE_EVENT_NODE_NAME } from '~/components/editor/extensions/inline-event';
import TooltipKeys from '~/components/cheatsheet/TootipKeys.vue';
import InterfaceContentFileAlternate from '~/components/streamline/InterfaceContentFileAlternate.vue';
import InterfaceTextFormattingListBullets from '~/components/streamline/InterfaceTextFormattingListBullets.vue';
import ProgrammingBrowserCode2 from '~/components/streamline/ProgrammingBrowserCode2.vue';
import ProgrammingBrowserCodeMonitor1 from '~/components/streamline/ProgrammingBrowserCodeMonitor1.vue';
import ProgrammingScriptFileCode1 from '~/components/streamline/ProgrammingScriptFileCode1.vue';
import ProgrammingScriptCode from '~/components/streamline/ProgrammingScriptCode.vue';
import ProgrammingBrowserCode1 from '~/components/streamline/ProgrammingBrowserCode1.vue';
import ProgrammingBrowserCodeMonitor2 from '~/components/streamline/ProgrammingBrowserCodeMonitor2.vue';
import InterfaceValidationCheck from '~/components/streamline/InterfaceValidationCheck.vue';
import TravelMapNavigationArrowSouthEastAlternateCompassArrowMapBearingMapsHeadingGpsRight from '~/components/streamline/TravelMapNavigationArrowSouthEastAlternateCompassArrowMapBearingMapsHeadingGpsRight.vue';
import AcreomHeading1 from '~/components/icons/AcreomHeading1.vue';
import AcreomParagraph from '~/components/icons/AcreomParagraph.vue';
import AcreomHeading2 from '~/components/icons/AcreomHeading2.vue';
import AcreomHeading3 from '~/components/icons/AcreomHeading3.vue';
import AcreomTemplate from '~/components/icons/AcreomTemplate.vue';
import { createTaskDateObject } from '~/helpers';
import { labelsFromText } from '~/plugins/entities/label';
import { INLINE_TASK_NODE_NAME } from '~/components/editor/extensions/task-item';
import { generateTaskListFromSelection } from '~/helpers/editor';
import {
    TrackingAction,
    TrackingActionSource,
    TrackingType,
} from '~/@types/tracking';

const truncate = (input: string) =>
    input.length > 60 ? `${input.substring(0, 60)}...` : input;
@Component({
    components: {
        AcreomTemplate,
        AcreomHeading3,
        AcreomHeading2,
        AcreomParagraph,
        AcreomHeading1,
        TravelMapNavigationArrowSouthEastAlternateCompassArrowMapBearingMapsHeadingGpsRight,
        InterfaceValidationCheck,
        ProgrammingBrowserCodeMonitor2,
        ProgrammingBrowserCode1,
        ProgrammingScriptCode,
        ProgrammingScriptFileCode1,
        ProgrammingBrowserCodeMonitor1,
        ProgrammingBrowserCode2,
        InterfaceTextFormattingListBullets,
        InterfaceContentFileAlternate,
        TooltipKeys,
        DocumentIcon,
        CheckIcon,
        TerminalIcon,
        Header1Icon,
        Header2Icon,
        Header3Icon,
        ParagraphIcon,
        ViewListIcon,
        ColorSwatchIcon,
    },
    name: 'ConvertMenu',
})
export default class ConvertMenu extends Vue {
    @Prop({
        default: null,
    })
    editor!: Editor;

    @Prop({
        default: '',
    })
    documentId!: string;

    visible: boolean = false;

    mounted() {
        this.$nextTick(() => {
            this.visible = true;
        });
    }

    handleMouseDown(e: MouseEvent) {
        if (this.$utils.isMobile) {
            e.preventDefault();
        }
    }

    get selectionLength() {
        const from = this.editor.view.state.selection.$anchor.pos;
        const to = this.editor.view.state.selection.$head.pos;

        return to - from;
    }

    async convertToTemplate() {
        if (!this.editor) return;
        const selection = this.editor.view.state.selection;
        const cut = this.editor.view.state.doc.cut(
            selection.from,
            selection.to,
        );
        const json = cut.toJSON();
        if (!json) return; // TODO: handle on FE?
        const recursiveFilter = (node: any) => {
            if (node.type === INLINE_EVENT_NODE_NAME) {
                return false;
            }
            if (node.content?.length) {
                for (const nodeChild of node.content) {
                    if (!recursiveFilter(nodeChild)) {
                        return false;
                    }
                }
            }
            return true;
        };
        json.content = json.content.filter((cont: any) =>
            recursiveFilter(cont),
        );
        const html = generateHTML(json as JSONContent, [
            ...this.editor.extensionManager.extensions,
        ]);
        const id = v4();
        let title = '';
        if (!cut.firstChild) return;
        const firstTitleNode = (cut.content as any).content.find(
            (node: any) =>
                ['heading', 'paragraph', 'bulletList', 'orderedList'].includes(
                    node.type.name,
                ) && node.textContent,
        );
        if (firstTitleNode) {
            if (
                firstTitleNode.type.name === 'bulletList' ||
                firstTitleNode.type.name === 'orderedList'
            ) {
                if (firstTitleNode.firstChild.type.name === 'listItem') {
                    title = truncate(firstTitleNode.firstChild.textContent);
                }
            } else {
                title = truncate(firstTitleNode.textContent);
            }
        }
        const originalDocument = this.$store.getters['document/byId'](
            this.documentId,
        ) as IDocument;
        const payload = {
            id,
            title: title.trim(),
            content: html,
            status: 'new',
            template: true,
            updatedAt: new Date(),
            createdAt: new Date(),
            projectId: originalDocument.projectId,
        };
        await this.$store.dispatch('document/new', payload);
        this.$store.dispatch('document/update', {
            id,
            content: html, // find tasks and set new parentId
        });

        this.$notification.show({
            component: () =>
                import('@/components/notifications/MiscNotification.vue'),
            bind: {
                callback: () => {
                    this.$entities.view.openTemplates();
                    this.$tracking.trackEventV2(TrackingType.TEMPLATE, {
                        action: TrackingAction.OPEN,
                        source: TrackingActionSource.NOTIFICATION_CONVERT_TO,
                    });
                },
                action: NotificationActions.REDIRECT,
                displayText: 'Template saved',
                actionText: 'Go to template',
            },
        });

        this.$emit('close');
    }

    convertToHeading(level: Level) {
        this.$emit('heading', level);
        this.$emit('close');
    }

    convertToParagraph() {
        this.$emit('paragraph');
        this.$emit('close');
    }

    get listSelected() {
        const selection = this.editor.view.state.selection;
        let selectedItems = 0;
        this.editor.state.doc.nodesBetween(
            selection.from,
            selection.to,
            (node: any) => {
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
            },
        );
        return selectedItems > 0;
    }

    get listName() {
        const selection = this.editor.view.state.selection;
        const headings: string[] = [];
        if (this.listSelected) {
            this.editor.state.doc.nodesBetween(
                selection.from,
                selection.to,
                (node: any) => {
                    if (node.type.name === 'heading') {
                        headings.push(
                            node.textContent
                                .trim()
                                .toLowerCase()
                                .replace(/\s/g, '-')
                                .replace(/((?![a-zA-Z0-9\-_:/.]).)*/g, ''),
                        );
                        return false;
                    }
                    return true;
                },
            );
            return headings.length > 0
                ? headings.length > 1
                    ? 'Multiple'
                    : headings[0]
                : '';
        }
        return '';
    }

    convertToList() {
        this.editor.commands.command(({ tr, state, editor }: CommandProps) => {
            const blockRange = state.selection.$from.blockRange(
                state.selection.$to,
            );
            if (!blockRange) return false;
            const newChildren = [];
            for (
                let index = blockRange.startIndex;
                index < blockRange.endIndex;
                index++
            ) {
                const child = blockRange.parent.child(index);
                if (
                    ['listItem', 'bulletList', 'orderedList'].includes(
                        child.type.name,
                    )
                ) {
                    const firstChild = child.firstChild;
                    if (
                        child.type.name === 'listItem' &&
                        firstChild?.type.name === INLINE_TASK_NODE_NAME
                    ) {
                        const paragraph = editor.schema.nodes.paragraph.create(
                            {},
                            firstChild.content,
                        );
                        const listItem = editor.schema.nodes.listItem.create(
                            {},
                            paragraph,
                        );
                        newChildren.push(listItem);
                        continue;
                    }
                    newChildren.push(child);
                } else {
                    newChildren.push(
                        editor.schema.nodes.listItem.create({}, child),
                    );
                }
            }
            const bulletList = editor.schema.nodes.bulletList.create(
                {},
                newChildren,
            );
            tr.replaceRangeWith(blockRange.start, blockRange.end, bulletList);
            return true;
        });

        this.editor.commands.focus(this.editor.state.selection.to);
        this.$emit('close');
    }

    createTaskListFromContent() {
        generateTaskListFromSelection(this.editor);
        this.$emit('close');
    }

    splitTaskText(text: string) {
        const limit = 70;
        if (text.length <= limit) return { title: text, content: '' };
        const accumulateToLimit = (arr: string[], limit: number) => {
            const acc: string[] = [];
            let i = 0;
            while (
                i < arr.length &&
                acc.join('.').length + arr[i].length + 1 <= limit
            ) {
                acc.push(arr[i]);
                i++;
            }
            if (acc.length) return acc.join('.').length + 1;
            return null;
        };
        const pickBestFit = (options: any) => {
            options.sort((a: any, b: any) => {
                if (a.idx === b.idx) {
                    return a.priority - b.priority;
                }
                return a.idx > b.idx ? -1 : 1;
            });
            return options[0];
        };
        const opts = [
            { char: '.', priority: 1 },
            { char: /[,\-=/_]/, priority: 2 },
            { char: ' ', priority: 3 },
        ];
        const results = [];
        for (const opt of opts) {
            const splitText = text.split(opt.char);
            const idx = accumulateToLimit(splitText, limit);
            if (idx) results.push({ text, idx, priority: opt.priority });
        }
        if (results.length) {
            const bestFit = pickBestFit(results);
            return {
                title: bestFit.text.slice(0, bestFit.idx),
                content: bestFit.text.slice(bestFit.idx),
            };
        }
        // fallback (hard 70 chars limit)
        return {
            title: text.slice(0, 70),
            content: text.slice(70),
        };
    }

    async convertToCodeBlock() {
        try {
            const selection = this.editor.view.state.selection;

            const cut = this.editor.view.state.doc.cut(
                selection.from,
                selection.to,
            );
            const div = document.createElement('div');

            div.appendChild(
                DOMSerializer.fromSchema(this.editor.schema).serializeFragment(
                    cut as any,
                ),
            );

            const html = div.innerHTML;
            div.remove();

            const content = await this.$serviceRegistry.invoke<string[]>(
                ServiceKey.UTILS,
                UtilActions.PARSE_HTML_TO_MD,
                {
                    vaultId: this.$store.getters['vault/active']?.id,
                    entity: [{ content: html }],
                    callerContext: 'ConvertMenu.vue convertToCodeBlock',
                },
            );

            if (!content || !content.length) return;

            this.editor
                .chain()
                .deleteRange({ from: selection.from, to: selection.to })
                .insertContent(`<pre><code>${content[0]}</code></pre>`)
                .run();

            this.$emit('close');
        } catch (error) {
            this.$sentry.captureException(error);
            console.log(error);
            this.$emit('close');
        }
    }

    async createDocumentFromContent() {
        if (!this.editor) return;
        const selection = this.editor.view.state.selection;
        // const selectedNode = this.editor.state.doc.nodeAt(selection.from);
        // if (!selectedNode) return;
        const cut = this.editor.view.state.doc.cut(
            selection.from,
            selection.to,
        );
        const json = cut.toJSON();
        if (!json) return; // TODO: handle on FE?
        const html = generateHTML(json as JSONContent, [
            ...this.editor.extensionManager.extensions,
        ]);
        const id = v4();
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
            } else if (firstTitleNode.type.name === 'table') {
                title = truncate(firstTitleNode.firstChild.textContent);
            } else {
                title = truncate(firstTitleNode.textContent);
            }
        }
        const originalDocument = this.$store.getters['document/byId'](
            this.documentId,
        ) as IDocument;
        await this.$store.dispatch('document/new', {
            id,
            title: title.trim(),
            content: html,
            status: 'new',
            updatedAt: new Date(),
            createdAt: new Date(),
            projectId: originalDocument.projectId,
        });
        this.$store.dispatch('document/update', {
            id,
            content: html, // find tasks and set new parentId
        });
        this.editor
            .chain()
            .deleteSelection()
            .insertContent({
                type: 'inlineDocumentLink',
                attrs: { id, value: '' },
            })
            .insertContent(' ')
            .focus()
            .run();
        this.$nextTick(() => {
            this.editor.commands.focus(selection.from + 1);
        });
        this.$emit('close');
    }

    createTaskFromContent() {
        if (!this.editor) return;
        generateTaskListFromSelection(this.editor);
        this.$emit('close');
    }
}
</script>

<style lang="scss" scoped>
.convert-menu {
    @include frostedGlassBackground;
    @include contextMenu(180px);
    transition: opacity 0.15s;

    &.visible {
        opacity: 1;
    }

    &--tip {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-left: auto;

        :deep(.tooltip-keys--button) {
            background: none;
            color: var(--context-menu-tooltip-keys-color);
            margin-right: 0;
            padding-right: 0;
            height: 18px;
        }
    }

    button {
        &:disabled {
            opacity: 0.4;
        }

        .tasklist-name {
            @include ellipsis;
            display: flex;
            justify-items: flex-start;
            align-items: center;
            white-space: nowrap;

            &--label {
                width: 100%;
                @include ellipsis;
                padding-left: 8px;
            }
        }
    }
}
</style>
