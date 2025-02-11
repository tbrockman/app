<template>
    <div class="fulltext-search-modal">
        <div class="fulltext-search-modal--inputs">
            <div
                class="fulltext-search-modal--input-wrapper"
                :class="{
                    empty: text.length <= 0,
                    'has-value': text.length > 0,
                }"
            >
                <InterfaceSearch class="icon search-icon" size="12" />
                <input
                    ref="search"
                    type="text"
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="off"
                    autofocus
                    spellcheck="false"
                    :value="text"
                    placeholder="Search"
                    @input="onSearchChange($event.target.value)"
                    @keydown.down.prevent="handleKeyDown"
                    @keydown.up.prevent="handleKeyUp"
                    @keydown.enter.prevent="handleEnter($event, undefined)"
                    @keydown.esc.stop.prevent="handleSearchClose"
                />
            </div>
        </div>
        <div
            v-if="text.length || results.length"
            class="fulltext-search-modal--types-wrapper"
        >
            <button
                v-if="results.length"
                class="fulltext-search-modal--type"
                :class="{
                    active: activeType === 'all',
                }"
                @click="handleTypeChange('all')"
            >
                All
            </button>
            <button
                v-if="resultTypes.document"
                class="fulltext-search-modal--type"
                :class="{
                    active: activeType === SearchIndex.DOCUMENT,
                }"
                @click="handleTypeChange(SearchIndex.DOCUMENT)"
            >
                Pages
            </button>
            <button
                v-if="resultTypes['my-day']"
                class="fulltext-search-modal--type"
                :class="{
                    active: activeType === 'my-day',
                }"
                @click="handleTypeChange('my-day')"
            >
                My Day
            </button>
            <button
                v-if="resultTypes['github']"
                class="fulltext-search-modal--type"
                :class="{
                    active: activeType === 'github',
                }"
                @click="handleTypeChange('github')"
            >
                Github
            </button>
            <button
                v-if="resultTypes['jira']"
                class="fulltext-search-modal--type"
                :class="{
                    active: activeType === 'jira',
                }"
                @click="handleTypeChange('jira')"
            >
                Jira
            </button>
            <button
                v-if="resultTypes['linear']"
                class="fulltext-search-modal--type"
                :class="{
                    active: activeType === 'linear',
                }"
                @click="handleTypeChange('linear')"
            >
                Linear
            </button>
        </div>
        <div class="fulltext-search-modal--results-wrapper">
            <SearchResult
                v-for="(result, index) in results"
                :ref="`result-${index}`"
                :key="`${result.vaultId}-${result.type}-${result.id}`"
                :search-index-type="result.searchIndexType"
                :result="result"
                :vault-id="result.vaultId"
                :text="result.title || result.displayLabel || 'Untitled'"
                :active="selectedIndex === index"
                :is-active-vault="
                    result.vaultId === activeVaultId ||
                    result.vaultId === 'commands'
                "
                @mousedown.native.stop="handleEnter($event, index)"
                @mouseup.middle.stop.prevent="handleEnter($event, index)"
            />
        </div>
        <div
            v-if="!results.length"
            class="fulltext-search-modal--no-results"
            :class="{ empty: !text.length }"
        >
            {{
                text.length
                    ? `No results for: ${text}`
                    : 'Start typing to search acreom'
            }}
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { parse } from 'date-fns';
import debounce from 'lodash/debounce';
import {
    SearchIndex,
    SearchServiceAction,
    ServiceKey,
    TabType,
} from '~/constants';
import SearchResult from '~/components/search/SearchResult.vue';
import InterfaceSearch from '~/components/streamline/InterfaceSearch.vue';
import { GithubIntegrationDataType } from '~/components/github/github';
import { SHORTCUTS_ALIASES } from '~/plugins/shortcuts-manager/keybinds';
import {
    TrackingAction,
    TrackingActionSource,
    TrackingType,
} from '~/@types/tracking';
import { TrackEvent } from '~/helpers/decorators';

@Component({
    name: 'FullTextSearch',
    components: {
        SearchResult,
        InterfaceSearch,
    },
})
export default class FullTextSearch extends Vue {
    @Prop({ default: '' })
    query!: string;

    $refs!: {
        [key: string]: any;
        search: HTMLInputElement;
    };

    text: string = '';

    activeType: string = 'all';
    lastQueryTimestamp: number = 0;
    results: any[] = [];
    resultTypes: Record<string, number> = {};
    selectedIndex: number = 0;

    SearchIndex = SearchIndex;
    debouncedQuerySearch!: () => Promise<any[]>;

    get activeVaultId() {
        return this.$store.getters['vault/active'].id;
    }

    @Watch('selectedIndex')
    handleSelectedIndexChange(value: number) {
        const resultIndex = `result-${value}`;
        this.$refs[resultIndex][0]?.scroll();
    }

    @Watch('results')
    handleResultsChange(curr: any[]) {
        if (this.selectedIndex >= curr.length && curr.length > 0) {
            this.selectedIndex = curr.length - 1;
        }
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

    @TrackEvent(TrackingType.FULL_SEARCH, {
        action: TrackingAction.SWITCH_CATEGORY,
        source: TrackingActionSource.PICKER,
    })
    handleTypeChange(type: string) {
        this.activeType = type;
        this.querySearch();
    }

    onSearchChange(value: any) {
        this.$emit('update', value);
        this.text = value;
        this.querySearch();
    }

    async querySearch(): Promise<any> {
        const searchResult = await this.runQuery();
        if (this.lastQueryTimestamp > searchResult.queriedAt) {
            return;
        }
        this.lastQueryTimestamp = searchResult.queriedAt;
        const results = searchResult.documents;

        // get all types
        this.resultTypes = results.reduce((acc: any, curr: any) => {
            const type =
                curr.searchIndexType === SearchIndex.INTEGRATION_DATA
                    ? curr.id.split('_')[0]
                    : curr.searchIndexType;
            if (acc[type]) {
                acc[type]++;
            } else {
                acc[type] = 1;
            }
            return acc;
        }, {});

        if (!Object.keys(this.resultTypes).includes(this.activeType)) {
            this.activeType = 'all';
        }

        if (this.activeType === 'all') {
            this.results = results;
            return;
        }

        this.results = results.filter((result: any) => {
            if (result.searchIndexType === SearchIndex.INTEGRATION_DATA) {
                return result.id.startsWith(this.activeType);
            }

            return result.searchIndexType.startsWith(this.activeType);
        });
    }

    runQuery(options?: any): any {
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
                    entity:
                        this.activeType === 'all' ? undefined : this.activeType,
                    fields: ['title', 'content', 'date', 'updatedAt', 'labels'],
                    excludeTypes: [
                        SearchIndex.COMMANDS,
                        SearchIndex.SETTINGS,
                        SearchIndex.VIEW,
                        SearchIndex.MY_DAY,
                        SearchIndex.PROJECT,
                    ],
                    limit: 100,
                    thisVaultOnly: true,
                },
                callerContext: 'FullTextSearch.vue runQuery',
            },
        );
    }

    @TrackEvent(TrackingType.MY_DAY, {
        source: TrackingActionSource.FULL_SEARCH,
        action: TrackingAction.OPEN,
    })
    openMyDay(event: MouseEvent | null, date: Date) {
        return this.$entities.myDay.open({
            event,
            data: { date },
        });
    }

    async handleEnter(event: any, index?: number) {
        if (index !== undefined) {
            this.selectedIndex = index;
        }
        if (!this.results.length) {
            await this.setFocus();
            return;
        }
        let shouldTimeout = false;
        const { id, dailyDoc, vaultId, searchIndexType, match } =
            this.results[this.selectedIndex];

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
                        TrackingActionSource.FULL_SEARCH,
                    );
                    return;
                }

                this.$entities.jira.openModal(
                    entity,
                    TrackingActionSource.FULL_SEARCH,
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
                    action: TrackingAction.OPEN,
                    source: TrackingActionSource.FULL_SEARCH,
                });

                const tab = this.$tabs.createNewTabObject(
                    id,
                    TabType.DOCUMENT,
                    { match },
                );
                return this.$tabs.openTabWithEvent(tab, event);
            }

            return this.openMyDay(event, dailyDocDate);
        };
        if (searchIndexType === SearchIndex.NEW_DOCUMENT) {
            const id = await this.createNewDocument();
            const tab = this.$tabs.createNewTabObject(id, TabType.DOCUMENT);
            await this.$tabs.openTabWithEvent(tab, event);
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

    async createNewDocument() {
        const id = await this.$utils.page.newPage({ title: this.text });
        this.handleSearchClose();
        return id;
    }

    handleSearchClose() {
        Promise.resolve().then(() => {
            this.$emit('close');
        });
    }

    async setFocus() {
        await this.$nextTick();
        this.$refs?.search?.focus({
            preventScroll: true,
        });
    }

    registerSearchShortcuts() {
        this.$shortcutsManager.registerShortcut(
            SHORTCUTS_ALIASES.SEARCH_OPEN_RESULT,
            () => this.handleEnter(null),
        );
    }

    unregisterSearchShortcuts() {
        this.$shortcutsManager.removeShortcut(
            SHORTCUTS_ALIASES.SEARCH_OPEN_RESULT,
        );
    }

    beforeDestroy() {
        this.unregisterSearchShortcuts();
    }

    mounted() {
        this.registerSearchShortcuts();
        this.text = this.query;
        this.debouncedQuerySearch = debounce(this.querySearch, 100, {
            maxWait: 1500,
            leading: true,
            trailing: true,
        });
        this.querySearch();
        this.$nextTick(() => {
            this.setFocus();
        });
    }
}
</script>

<style lang="scss" scoped>
.fulltext-search-modal {
    background: var(--search-modal-bg-color);
    width: 100%;
    height: calc(100% - 44px);
    border-radius: 16px;
    overflow: hidden;

    &--inputs {
        padding: 0px 114px 0px;
    }

    &--input-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px 6px 6px 13px;
        background: var(--search-modal-input-bg-color);
        border: 1px solid var(--search-modal-input-border-color);
        border-radius: 8px;
        margin-bottom: 16px;

        &.has-value {
            border-radius: 8px;
        }

        .search-icon {
            margin-right: 8px;
            color: var(--search-modal-input-icon-color);
            flex-shrink: 0;
        }

        input {
            @include inputMetaStyles;
            outline: none;
            font-weight: 500;
            font-size: 13px;
            line-height: 20px;
            color: var(--search-modal-input-text-color);
            display: block;
            width: 100%;

            &::placeholder {
                color: var(--search-modal-input-placeholder-color);
            }
        }
    }

    &--types-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 16px;
        padding: 0px 114px 0px;
    }

    &--type {
        @include font12-500;
        padding: 3px 13px;
        margin-right: 4px;
        white-space: nowrap;

        &:hover {
            background: var(--search-modal-type-bg-color__hover);
            border-radius: 6px;
        }

        &.active {
            background: var(--search-modal-type-bg-color__active);
            border-radius: 6px;
        }
    }

    &--results-wrapper {
        @include scrollbarLight(0px, 20px);
        padding: 0px 114px 0px;
        overflow-x: hidden;
        overflow-y: overlay;
        max-height: calc(100% - 99px);
    }

    &--no-results {
        @include font12-500;
        color: var(--search-modal-no-results-text-color);
        padding-top: 100px;
        text-align: center;

        &.empty {
            padding-top: 152px;
        }
    }
}
</style>
