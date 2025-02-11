<template>
    <div
        class="review-page"
        :class="{ focused, highlight }"
        @click="openDocument"
    >
        <button class="review-page__header">
            <div class="review-page__header__title">
                <div class="review-page__header__title__icon">
                    <DocumentIcon
                        :document="document"
                        size="14"
                        icon-size="22"
                        font-size="14"
                        class="icon"
                    />
                </div>
                <p>{{ title }}</p>
            </div>
        </button>
        <button
            :ref="`page-${document.id}`"
            class="review-page__header__title__time"
            @click.stop.prevent="showScheduleDropdown"
        >
            <div class="review-page__header__title__time__wrapper">
                <span v-if="reviewPanel">{{ timeDelta }}</span>
                <span v-else>{{ formattedDateText(document) }}</span>
            </div>
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
    add,
    formatDistanceStrict,
    isToday,
    nextFriday,
    nextMonday,
    nextSaturday,
    nextSunday,
    nextThursday,
    nextTuesday,
    nextWednesday,
    startOfDay,
} from 'date-fns';
import { IDocument } from '~/components/document/model';
import DocumentIcon from '~/components/document/DocumentIcon.vue';
import { TabType } from '~/constants';
import AcreomChevronRight from '~/components/icons/AcreomChevronRight.vue';
import { formatRelativeToDate } from '~/helpers';
import PageDatePickerDropdown from '~/components/document/PageDatePickerDropdown.vue';
import {
    TrackingAction,
    TrackingActionSource,
    TrackingType,
} from '~/@types/tracking';

@Component({
    name: 'ReviewPage',
    components: {
        AcreomChevronRight,
        DocumentIcon,
    },
})
export default class ReviewPage extends Vue {
    $refs!: {
        [key: string]: any;
    };

    @Prop({ required: true })
    document!: IDocument;

    @Prop({ default: false })
    reviewPanel!: boolean;

    @Prop({ default: false })
    focused!: boolean;

    scheduleDropdownOpen: boolean = false;
    highlight: boolean = false;

    get title() {
        return this.document.title ?? 'Untitled';
    }

    openDocument() {
        this.$tracking.trackEventV2(TrackingType.PAGE, {
            source: this.reviewPanel
                ? TrackingActionSource.OVERDUE
                : TrackingActionSource.AGENDA,
            action: TrackingAction.OPEN,
        });

        const tab = this.$tabs.createNewTabObject(
            this.document.id,
            TabType.DOCUMENT,
        );
        this.$tabs.openTab(tab);
    }

    get timeDelta() {
        const now = startOfDay(new Date());

        const start = this.document!.start?.date ?? this.document!.start?.dateTime;

        if (!start) {
            return '';
        }

        const taskStart = startOfDay(start);

        if (isToday(taskStart)) {
            return 'today';
        }

        return `${formatDistanceStrict(taskStart, now, { unit: 'day' })} ago`;
    }

    formattedDateText(page: IDocument) {
        const now = new Date();
        return formatRelativeToDate(
            page,
            now,
            true,
            this.$store.getters['appSettings/dateTimeOptions'],
        );
    }

    setToday() {
        const date = new Date();
        this.$utils.page.schedulePage(this.document, date);
    }

    setTomorrow() {
        this.$utils.page.schedulePage(
            this.document,
            add(new Date(), { days: 1 }),
        );
    }

    setNextWeek() {
        const starts = [
            nextSunday,
            nextMonday,
            nextTuesday,
            nextWednesday,
            nextThursday,
            nextFriday,
            nextSaturday,
        ];
        const nextWeek = starts[
            this.$store.getters['appSettings/calendarOptions'].weekdayStart
        ](new Date());
        this.$utils.page.schedulePage(this.document, nextWeek);
    }

    showInContext() {
        this.openDocument();
    }

    showScheduleDropdown() {
        this.scheduleDropdownOpen = true;
        this.$dropdown.show({
            component: PageDatePickerDropdown,
            parent: this.$refs[`page-${this.document.id}`],
            retainFocus: true,
            bind: {
                pageId: this.document.id,
                source: this.reviewPanel
                    ? TrackingActionSource.OVERDUE
                    : TrackingActionSource.AGENDA,
            },
            on: {},
            onClose: () => {
                if (!this.scheduleDropdownOpen) return;
                this.scheduleDropdownOpen = false;
            },
        });
    }
}
</script>

<style lang="scss" scoped>
.review-page {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 6px;

    &.focused {
        background: var(--task-bg-color__focused);
        box-shadow: inset 0px 0px 0px 2px var(--task-box-shadow-color__focused);
    }

    &:hover,
    &.highlight {
        background: var(--task-review-page-bg-color__hover);
    }

    &__header {
        outline: none;
        cursor: default;
        user-select: none;
        padding: 0 6px 0 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 6px;
        overflow: hidden;

        &__title {
            width: 100%;
            display: flex;
            align-items: center;
            overflow: hidden;

            &__icon {
                width: 22px;
                height: 22px;
                line-height: 22px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 3px;
                margin-left: 2px;

                .icon {
                    color: var(--task-review-page-title-icon-color);
                }
            }

            p {
                @include ellipsis;
                @include font14-500;
                color: var(--task-review-page-title-text-color);
            }

            &__time {
                padding: 5px 6px 5px 0;

                &__wrapper {
                    white-space: nowrap;
                    color: var(--accent-color);
                    margin-left: 4px;
                    display: flex;
                    align-items: center;
                    padding: 0 6px;
                    border-radius: 6px;

                    .icon {
                        margin-left: 6px;
                        color: var(--task-icon-color);
                    }
                }
            }
        }
    }
}
</style>
