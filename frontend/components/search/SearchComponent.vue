<template>
    <div class="search no-drag">
        <div class="search--wrapper">
            <div
                class="search--input-wrapper"
                :class="{
                    empty:
                        text.length <= 0 &&
                        !results.length &&
                        !includeInteractions,
                    'has-value':
                        (text.length > 0 && results.length) || results.length,
                }"
            >
                <input
                    ref="search"
                    type="text"
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck="false"
                    :value="text"
                    placeholder="Where would you like to go?"
                    @input="onSearchChange($event.target.value)"
                    @keydown.down.prevent.stop="handleKeyDown"
                    @keydown.up.prevent.stop="handleKeyUp"
                    @keydown.enter.prevent.stop="handleEnter"
                    @keydown.esc.stop.prevent.stop="handleSearchClose"
                    @focus="focused = true"
                    @blur="handleBlur"
                />
            </div>
            <div v-if="results.length" class="search--results">
                <div class="search--results--list">
                    <div>
                        <div v-if="results.length > 0">
                            <SearchResult
                                v-for="(result, index) in results"
                                :ref="`result-${index}`"
                                :key="`${result.vaultId}-${result.searchIndexType}-${result.id}`"
                                :search-index-type="result.searchIndexType"
                                :result="result"
                                :active="selectedIndex === index"
                                :text="result.title || 'Untitled'"
                                :vault-id="result.vaultId"
                                :is-active-vault="result.isActiveVault"
                                :prefix="result.prefix"
                                @mousedown.native.stop="
                                    handleEnter($event, index)
                                "
                                @mouseup.middle.stop.prevent="
                                    handleEnter($event, index)
                                "
                            />
                        </div>
                    </div>
                </div>
                <span class="search--results--tip"
                    ><span class="search--results--tip--keys"
                        >{{ modKey }} ↵</span
                    >
                    Open in new tab
                    <span class="search--results--tip--divider">•</span>
                    <span class="search--results--tip--keys"
                        >{{ altKey }} ↵</span
                    >
                    Open and split right</span
                >
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { parse } from 'date-fns';
import SearchResult from './SearchResult.vue';
import CButton from '@/components/CButton.vue';
import { IDocument } from '~/components/document/model';
import {
    SearchIndex,
    SearchServiceAction,
    ServiceKey,
    TabType,
} from '~/constants';
import RuntimeTemplate from '~/components/util/RuntimeTemplate.vue';
import { SHORTCUTS_ALIASES } from '~/plugins/shortcuts-manager/keybinds';
import { FocusEditor } from '~/helpers/decorators';
import InterfaceSearch from '~/components/streamline/InterfaceSearch.vue';
import LoadingIcon from '~/components/icons/LoadingIcon.vue';
import { GithubIntegrationDataType } from '~/components/github/github';
import {
    TrackingAction,
    TrackingActionSource,
    TrackingActionSourceMeta,
    TrackingType,
} from '~/@types/tracking';
import { Tab } from '~/@types/app';

@Component({
    name: 'SearchComponent',
    components: {
        LoadingIcon,
        InterfaceSearch,
        CButton,
        SearchResult,
        RuntimeTemplate,
    },
})
export default class SearchComponent extends Vue {
    @Prop({ default: false })
    includeInteractions!: boolean;

    @Prop({ default: '' })
    initialQuery!: string;

    $refs!: {
        [key: string]: any;
    };

    focused: boolean = false;
    searchOpen: boolean = false;
    results: any[] = [];
    selectedIndex: number = 0;
    text: string = '';
    lastQueryTimestamp: number = 0;

    get modKey() {
        return this.$config.os === 'mac' ? '⌘' : 'Ctrl';
    }

    get altKey() {
        return this.$config.os === 'mac' ? '⌥' : 'Alt';
    }

    get allCommands(): { [p: string]: any } {
        const isMyDay =
            this.$store.getters['tabs/byId'](
                this.$store.getters['tabs/activeGroup'].activeTab,
            ).type === TabType.MY_DAY;
        const excludedShortcuts = [];
        if (!isMyDay) {
            excludedShortcuts.push(SHORTCUTS_ALIASES.REVIEW_PANEL_TOGGLE);
        }
        excludedShortcuts.push(SHORTCUTS_ALIASES.JIRA_APP);
        excludedShortcuts.push(SHORTCUTS_ALIASES.GITHUB_APP);
        return this.$commandManager.getCommands(excludedShortcuts);
    }

    get inputtingCommand() {
        return this.text.startsWith('>');
    }

    get activeVaultId() {
        return this.$store.getters['vault/active'].id;
    }

    @Watch('focused')
    handleFocusedChange(value: boolean) {
        if (value) {
            this.$shortcutsManager.enableNamespace('search', true);
            return;
        }
        this.$shortcutsManager.disableNamespace('search', true);
    }

    @Watch('selectedIndex')
    handleSelectedIndexChange(value: number) {
        this.$refs[`result-${value}`][0]?.scroll();
    }

    @Watch('results')
    handleResultsChange(curr: any[]) {
        if (this.selectedIndex >= curr.length && curr.length > 0) {
            this.selectedIndex = curr.length - 1;
        }
    }

    @Watch('searchOpen')
    handleSearchOpen(value: boolean) {
        if (!value) {
            setTimeout(() => {
                this.resetIndex();
            }, 200);
            return;
        }

        if (this.includeInteractions) {
            this.$serviceRegistry
                .invoke<{ documents: IDocument[] }>(
                    ServiceKey.SEARCH,
                    SearchServiceAction.GET_INTERACTIONS,
                    {
                        vaultId: this.$store.getters['vault/active']?.id,
                        callerContext: 'SearchComponent.vue handleSearchOpen',
                    },
                )
                .then(searchResult => {
                    if (!searchResult) {
                        this.results = [];
                        return;
                    }
                    const results = searchResult.documents?.map((doc: any) => {
                        return {
                            ...doc,
                            searchIndexType:
                                doc.searchIndexType ?? SearchIndex.DOCUMENT,
                        };
                    }) as IDocument[];

                    this.results = this.sortResults(results);
                });
        }
    }

    handleBlur(e: Event) {
        this.focused = false;
        document.dispatchEvent(
            new FocusEvent('focusout', {
                relatedTarget: e.currentTarget,
                view: window,
                bubbles: true,
            }),
        );
        this.handleSearchClose();
    }

    handleKeyDown() {
        if (this.results.length === 0) return;
        if (this.selectedIndex === this.results.length - 1) {
            this.selectedIndex = 0;
        } else {
            this.selectedIndex++;
        }
    }

    handleKeyUp() {
        if (this.results.length === 0) return;
        if (this.selectedIndex === 0) {
            this.selectedIndex = this.results.length - 1;
        } else {
            this.selectedIndex--;
        }
    }

    async handleEnter(event: any, index?: number) {
        if (index !== undefined) {
            this.selectedIndex = index;
        }
        if (!this.results.length) return;

        const searchResult = this.results[this.selectedIndex];

        if (
            searchResult.searchIndexType === SearchIndex.MY_DAY &&
            searchResult.id === TabType.MY_DAY
        ) {
            this.handleSearchClose();
            this.$tracking.trackEventV2(TrackingType.MY_DAY, {
                source: searchResult.interactions
                    ? TrackingActionSource.NAVIGATION_INTERACTION
                    : TrackingActionSource.NAVIGATION_SEARCH,
                action: TrackingAction.OPEN,
            });
            return this.$entities.myDay.open({ event });
        }

        if (searchResult.searchIndexType === SearchIndex.SETTINGS) {
            this.handleSearchClose();
            this.$utils.navigation.openSettings(
                searchResult.id,
                TrackingActionSource.NAVIGATION,
            );
            return;
        }

        if (searchResult.searchIndexType === SearchIndex.VIEW) {
            this.handleSearchClose();
            const tab = this.$tabs.createNewTabObject(
                searchResult.id,
                TabType.VIEW,
            );
            const type = this.$tracking.resolveTypeFromTab(tab as Tab);
            if (type) {
                this.$tracking.trackEventV2(type, {
                    action: TrackingAction.OPEN,
                    source: TrackingActionSource.NAVIGATION,
                });
            }
            this.$tabs.openTab(tab);
            return;
        }

        if (searchResult.searchIndexType === SearchIndex.PROJECT) {
            this.handleSearchClose();
            const tab = this.$tabs.createNewTabObject(
                searchResult.id,
                TabType.PROJECT,
            );
            const type = this.$tracking.resolveTypeFromTab(tab as Tab);
            if (type) {
                this.$tracking.trackEventV2(type, {
                    action: TrackingAction.OPEN,
                    source: TrackingActionSource.NAVIGATION,
                });
            }
            this.$tabs.openTab(tab);
            return;
        }

        if (searchResult.searchIndexType === SearchIndex.ASSISTANT_QUERY) {
            this.searchOpen = false;
            const query = this.text;
            this.handleSearchClose();
            this.handleAssistantQuery(query);
            this.$tracking.trackEventV2(TrackingType.FULL_SEARCH, {
                source: TrackingActionSource.NAVIGATION,
                action: TrackingAction.OPEN_FULL_SEARCH,
                sourceMeta: TrackingActionSourceMeta.ASSISTANT,
            });
            return;
        }
        if (searchResult.searchIndexType === SearchIndex.OPEN_SEARCH) {
            this.searchOpen = false;
            const query = this.text;
            this.handleSearchClose();
            this.$nuxt.$emit('open-full-search', query);
            this.$tracking.trackEventV2(TrackingType.FULL_SEARCH, {
                source: TrackingActionSource.NAVIGATION,
                action: TrackingAction.OPEN_FULL_SEARCH,
                sourceMeta: TrackingActionSourceMeta.SEARCH,
            });
            return;
        }

        if (searchResult.searchIndexType === SearchIndex.COMMANDS) {
            this.$shortcutsManager.invokeShortcutManual(searchResult.id);
            this.handleSearchClose();
            return;
        }

        let shouldTimeout = false;
        const { id, dailyDoc, vaultId, searchIndexType } = searchResult;

        this.$store.dispatch('documentSearch/setTerm', this.text.trim());

        const goTo = (dailyDocDate?: Date | null) => {
            if (searchIndexType === SearchIndex.INTEGRATION_DATA) {
                const entity = this.$store.getters['integrationData/byId'](id);

                if (
                    entity.id.startsWith(GithubIntegrationDataType.ISSUE) ||
                    entity.id.startsWith(GithubIntegrationDataType.PR)
                ) {
                    this.$entities.github.openModal(
                        entity,
                        TrackingActionSource.NAVIGATION,
                    );
                    return;
                }

                this.$entities.jira.openModal(
                    entity,
                    TrackingActionSource.NAVIGATION,
                );
                return;
            }

            if (searchIndexType === SearchIndex.EVENT) {
                const calendarEvent = this.$store.getters['event/byId'](id);
                return this.$vfm.show({
                    component: () =>
                        import('~/components/event/modal/EventModal.vue'),
                    bind: {
                        event: calendarEvent,
                    },
                });
            }

            if (!dailyDocDate) {
                this.$tracking.trackEventV2(TrackingType.PAGE, {
                    source: searchResult.interactions
                        ? TrackingActionSource.NAVIGATION_INTERACTION
                        : TrackingActionSource.NAVIGATION_SEARCH,
                    action: TrackingAction.OPEN,
                });
                const tab = this.$tabs.createNewTabObject(id, TabType.DOCUMENT);
                return this.$tabs.openTabWithEvent(tab, event);
            }

            this.$tracking.trackEventV2(TrackingType.MY_DAY, {
                source: searchResult.interactions
                    ? TrackingActionSource.NAVIGATION_INTERACTION
                    : TrackingActionSource.NAVIGATION_SEARCH,
                action: TrackingAction.OPEN,
            });
            return this.$entities.myDay.open({
                event,
                data: { date: dailyDocDate },
            });
        };
        if (searchIndexType === SearchIndex.NEW_DOCUMENT) {
            const id = await this.createNewDocument();
            const tab = this.$tabs.createNewTabObject(id, TabType.DOCUMENT);
            await this.$tabs.openTabWithEvent(tab, event);

            this.$tracking.trackEventV2(TrackingType.PAGE, {
                action: TrackingAction.CREATE,
                source: TrackingActionSource.NAVIGATION,
                entityId: id,
            });
            return;
        }

        if (vaultId !== this.$store.getters['vault/active'].id) {
            await this.$store.dispatch('vault/activate', vaultId);
            shouldTimeout = true;
        }

        const formattedDailyDoc = dailyDoc
            ? parse(dailyDoc, 'yyyy-MM-dd', new Date())
            : null;
        if (shouldTimeout) {
            setTimeout(() => goTo(formattedDailyDoc), 120);
        } else {
            goTo(formattedDailyDoc);
        }

        this.handleSearchClose();
    }

    handleAssistantQuery(query: string) {
        this.$nuxt.$emit('open-full-search', query, 'assistant');
    }

    async createNewDocument() {
        const id = await this.$utils.page.newPage({ title: this.text });
        this.handleSearchClose();
        return id;
    }

    setFocus() {
        if (!this.$refs.search) return;
        this.$nextTick(() => {
            this.$refs.search.focus({
                preventScroll: true,
            });
        });
    }

    query(options?: any): Promise<any> {
        if (this.text.length === 0 && this.includeInteractions) {
            this.selectedIndex = 0;
            return this.$serviceRegistry.invoke(
                ServiceKey.SEARCH,
                SearchServiceAction.GET_INTERACTIONS,
                {
                    vaultId: this.$store.getters['vault/active']?.id,
                    callerContext: 'SearchComponent.vue interactions',
                },
            );
        }
        return this.$serviceRegistry.invoke(
            ServiceKey.SEARCH,
            SearchServiceAction.QUERY,
            {
                query: this.text,
                options: {
                    ...(options ?? {}),
                    activeVault: this.$store.getters['vault/active'],
                    dateTimeOptions:
                        this.$store.getters['appSettings/dateTimeOptions'],
                    excludeInactive: true,
                    thisVaultOnly: true,
                    entity: this.inputtingCommand
                        ? SearchIndex.COMMANDS
                        : undefined,
                    limit: 100,
                },
                callerContext: 'SearchComponent.vue get query',
            },
        );
    }

    async onSearchChange(value: any) {
        this.$emit('update:interactions', true);
        if (this.text.length === 0) {
            this.selectedIndex = 0;
        }
        this.text = value;
        this.$emit('update', value);
        if (this.inputtingCommand && value.trim() === '>') {
            this.results = Object.values(SHORTCUTS_ALIASES)
                .filter(item => Object.keys(this.allCommands).includes(item))
                .map((key: string) => ({
                    title: this.allCommands[key].displayLabel,
                    ...this.allCommands[key],
                    searchIndexType: SearchIndex.COMMANDS,
                    id: key,
                    isActiveVault: true,
                    vaultId: SearchIndex.COMMANDS,
                }));
            return;
        }
        const searchResult = await this.query();
        if (!searchResult) return;

        if (this.lastQueryTimestamp > searchResult.queriedAt) {
            return;
        }
        this.lastQueryTimestamp = searchResult.queriedAt;
        const results = searchResult.documents
            ?.map((doc: any) => {
                return {
                    ...doc,
                    searchIndexType:
                        doc.searchIndexType ?? SearchIndex.DOCUMENT,
                };
            })
            .filter((result: any) => {
                return (
                    result.searchIndexType !== SearchIndex.COMMANDS ||
                    !!this.allCommands[result.id]
                );
            });

        this.results = this.sortResults(results);
    }

    metaResults() {
        if (this.inputtingCommand) return [];
        if (this.text.length === 0) {
            const initialOptions = [
                {
                    vaultId: this.$store.getters['vault/active'].id,
                    searchIndexType: SearchIndex.OPEN_SEARCH,
                    title: 'Open full search',
                    isActiveVault: true,
                    keybind:
                        this.$shortcutsManager.keybinds[
                            this.$shortcutsManager.availableShortcuts
                                .OPEN_FULL_SEARCH
                        ].keybind,
                },
            ];
            if (this.$utils.assistant.assistantEnabled) {
                initialOptions.push({
                    vaultId: this.$store.getters['vault/active'].id,
                    searchIndexType: SearchIndex.ASSISTANT_QUERY,
                    title: 'Search with Assistant',
                    isActiveVault: true,
                    keybind:
                        this.$shortcutsManager.keybinds[
                            this.$shortcutsManager.availableShortcuts.OPEN_XRAY
                        ].keybind,
                });
            }
            return initialOptions;
        }

        const metaResults = [
            {
                vaultId: this.$store.getters['vault/active'].id,
                searchIndexType: SearchIndex.NEW_DOCUMENT,
                isActiveVault: true,
                title: this.inputtingCommand
                    ? this.text.slice(1, this.text.length).trim()
                    : this.text,
            },
            {
                vaultId: this.$store.getters['vault/active'].id,
                searchIndexType: SearchIndex.OPEN_SEARCH,
                title: 'Open full search',
                isActiveVault: true,
                keybind:
                    this.$shortcutsManager.keybinds[
                        this.$shortcutsManager.availableShortcuts
                            .OPEN_FULL_SEARCH
                    ].keybind,
            },
        ];
        if (this.$utils.assistant.assistantEnabled) {
            metaResults.push({
                vaultId: this.$store.getters['vault/active'].id,
                searchIndexType: SearchIndex.ASSISTANT_QUERY,
                title: 'Search with assistant',
                isActiveVault: true,
                keybind:
                    this.$shortcutsManager.keybinds[
                        this.$shortcutsManager.availableShortcuts.OPEN_XRAY
                    ].keybind,
            });
        }
        return metaResults;
    }

    sortResults(results: any[]) {
        return [
            ...results
                .filter(
                    item =>
                        item.vaultId === this.activeVaultId ||
                        item.searchIndexType === SearchIndex.COMMANDS ||
                        item.searchIndexType === SearchIndex.SETTINGS ||
                        item.id === TabType.MY_DAY,
                )
                .map(item => ({ ...item, isActiveVault: true })),
            ...results
                .filter(
                    item =>
                        item.vaultId !== this.activeVaultId &&
                        item.searchIndexType !== SearchIndex.COMMANDS &&
                        item.searchIndexType !== SearchIndex.SETTINGS &&
                        item.id !== TabType.MY_DAY,
                )
                .map(item => ({ ...item, isActiveVault: false })),
            ...this.metaResults(),
        ];
    }

    @FocusEditor
    handleSearchClose() {
        Promise.resolve().then(() => {
            this.$emit('close');
        });
        this.onSearchChange('');
        this.searchOpen = false;
        if (this.$refs.search) {
            this.$refs.search.blur();
        }
    }

    resetIndex() {
        this.selectedIndex = 0;
    }

    beforeDestroy() {
        this.onSearchChange('');
        this.searchOpen = false;
    }

    mounted() {
        this.setFocus();
        if (this.initialQuery) {
            this.onSearchChange(this.initialQuery);
        }
        this.searchOpen = true;
    }
}
</script>

<style lang="scss" scoped>
.vfm__content,
.modal-content {
    width: auto;
}

.search {
    position: relative;
    width: 100%;
    height: 34px;

    &--wrapper {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        border-radius: 8px;
        box-shadow: var(--navigation-box-shadow);
    }

    .icon {
        margin-right: 8px;
        color: #616161; // TODO: Does not follow theme
        flex-shrink: 0;
    }

    &--results {
        overflow: hidden;
        user-select: none;
        width: 100%;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        background: var(--navigation-bg-color);
        border-left: 1px solid var(--navigation-border-color);
        border-right: 1px solid var(--navigation-border-color);
        border-bottom: 1px solid var(--navigation-border-color);

        &--list {
            @include scrollbarLight(0px, 0px, 3px, 0px);
            max-height: 342px;
            overflow-y: overlay;
            overflow-x: hidden;
            padding-bottom: 4px;
        }

        &--tip {
            @include font12-600;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            padding: 4px 8px;
            border-top: 1px solid var(--navigation-border-color);
            color: var(--navigation-tip-text-color);

            &--keys {
                color: var(--navigation-keys-text-color);
                margin-right: 8px;
            }

            &--divider {
                color: var(--tab-divider-color);
                margin: 0 10px;
            }

            @media (max-width: 900px) {
                display: none;
            }
        }
    }

    &--input-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px 16px 6px 16px;
        background: var(--navigation-bg-color);
        border: 1px solid var(--navigation-border-color);
        border-radius: 8px;

        &.has-value {
            border-radius: 8px 8px 0 0;
        }

        &.empty {
            border: 2px solid var(--accent-color);
            padding: 5px 5px 5px 12px;
        }

        input {
            @include inputMetaStyles;
            outline: none;
            font-weight: 500;
            font-size: 13px;
            line-height: 20px;
            color: var(--navigation-title-text-color);
            display: block;
            width: 100%;

            &::placeholder {
                color: var(--navigation-title-placeholder-color);
            }
        }
    }
}
</style>
