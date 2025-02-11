<template>
    <node-view-wrapper class="code-block" as="pre" :class="{ open: dropdownOpen }"
        @mouseleave.native="handleMouseLeave">
        <div v-if="editor.isEditable" class="code-block-menu">
            <LanguageSelector v-if="!$utils.isMobile" class="codeblock-language-selector"
                :class="{ open: selectionOpen }" :languages="languages" :active-language="node.attrs.language"
                :selection-open="selectionOpen" contenteditable="false" @change="selectionOpen = $event"
                @select-language="handleSelectLanguage" @blur="selectionOpen = false" @focus="selectionOpen = true" />
            <div v-else></div>
            <div class="code-block-menu__controls">
                <button :class="{ open: selectionOpen }" @click="onCopyClick">
                    <InterfaceFileClipboard size="14" class="icon" />
                </button>
            </div>
        </div>
        <div class="code-block__wrapper">
            <div class="code-block__wrapper__left" contenteditable="false">
                <div v-for="line in lineNumbers" :key="line" class="code-block__line-number">
                    {{ line }}
                </div>
            </div>
            <node-view-content as="code" style="min-width: 1px; white-space: pre" class="code-block__code"
                spellcheck="false" />
        </div>
    </node-view-wrapper>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { NodeViewWrapper, NodeViewContent, nodeViewProps, Editor } from '@tiptap/vue-2';
import { Node } from '@tiptap/pm/model';
import LanguageSelector from './LanguageSelector.vue';
import InterfaceFileClipboard from '~/components/streamline/InterfaceFileClipboard.vue';
@Component({
    name: 'CodeBlockComponent',
    components: {
        InterfaceFileClipboard,
        NodeViewWrapper,
        NodeViewContent,
        LanguageSelector,
    },
    props: nodeViewProps,
})
export default class CodeBlockComponent extends Vue {
    node!: Node;
    extension!: any;
    getPos!: any;
    editor!: Editor;
    updateAttributes!: any;
    selectionOpen: boolean = false;
    copyInteraction: boolean = false;

    get lineNumbers() {
        return this.node.textContent.split('\n').map((_, index) => index + 1);
    }

    get languages() {
        return this.extension?.options?.lowlight?.listLanguages() ?? [];
    }

    get dropdownOpen() {
        return this.$dropdown.dropdownList.find(
            (dropdown: any) => dropdown.name === 'language-selector',
        );
    }

    handleSelectLanguage(language: string) {
        this.updateAttributes({
            language,
        });
    }

    handleMouseLeave() {
        this.copyInteraction = false;
    }

    onCopyClick(e: MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        const cssClass = this.node.attrs.language
            ? ` class="language-${this.node.attrs.language}"`
            : '';
        const escapeHtml = (unsafe: string) => {
            return unsafe
                .replaceAll('&', '&amp;')
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;')
                .replaceAll('"', '&quot;')
                .replaceAll("'", '&#039;');
        };
        try {
            const html = `<pre><code${cssClass}>${escapeHtml(
                this.node.textContent,
            )}</code></pre>`;

            const success = this.$utils.copyToClipboard(
                html,
                'Copied to clipboard',
                {
                    format: 'text/html',
                    onCopy: (clipboardData: any) => {
                        clipboardData.setData(
                            'text/plain',
                            this.node.textContent,
                        );
                    },
                },
            );

            if (success) {
                this.copyInteraction = true;
            }
        } catch (error) {
            this.$sentry.captureException(error);
            console.log(error);
            this.copyInteraction = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.code-block {
    padding: 8px 0px 0px 6px !important;
    position: relative;

    &__code {
        @include scrollbar;
        overflow-x: auto;
        white-space: pre !important;
        padding-bottom: 10px;
    }

    &:hover,
    &.open {
        .code-block-menu {
            opacity: 1;

            :deep(.a-select__button) {
                @include frostedGlassBackground;
            }

            :deep(svg) {
                opacity: 1;
            }

            .code-block-menu__controls {
                @include frostedGlassBackground;
            }
        }
    }

    &__wrapper {
        display: flex;

        &__left {
            color: var(--extension-codeblock-line-number-text-color);
            user-select: none;
            padding: 0 6px 0 0;
            border-right: 1px solid var(--extension-codeblock-line-number-line-color);
            margin-right: 6px;

            .code-block__line-number {
                min-width: 18px;
                display: flex;
                justify-content: flex-end;
            }
        }
    }
}

.code-block-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    opacity: 0.5;
    position: relative;
    left: 2px;
    width: calc(100% - 10px);

    :deep(.a-select__button) {
        background: none;
        border: 1px solid rgba(0, 0, 0, 0);
        box-shadow: none;
        border-radius: 4px;
        padding: 4px 6px;
        display: flex;
        align-items: center;
        gap: 6px;

        svg {
            opacity: 0;
        }
    }

    &__controls {
        border: 1px solid rgba(0, 0, 0, 0);
        border-radius: 4px;
        padding: 4px 6px;
        display: flex;
        align-items: center;
        gap: 6px;

        button {
            padding: 2px;
            color: var(--editor-extension-image-controls-icon-color);

            &:hover {
                color: var(--context-menu-button-icon-color__hover);
            }
        }
    }
}
</style>
