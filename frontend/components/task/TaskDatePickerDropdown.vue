<template>
    <div class="task-date-picker">
        <button
            class="task-date-picker--button"
            data-e2e="task-schedule-picker-today"
            @click="moveToToday"
        >
            <div class="task-date-picker--left">
                <InterfaceFavoriteStar class="icon" size="14" />
                Today
            </div>
            <div class="task-date-picker--right">{{ todayDate }}</div>
        </button>
        <button
            class="task-date-picker--button"
            data-e2e="task-schedule-picker-tomorrow"
            @click="moveToTomorrow"
        >
            <div class="task-date-picker--left">
                <InterfaceArrowsBendRight1Alternate class="icon" size="14" />
                Tomorrow
            </div>
            <div class="task-date-picker--right">
                {{ tmrDate }}
            </div>
        </button>
        <button
            class="task-date-picker--button"
            data-e2e="task-schedule-picker-monday"
            @click="moveToMonday"
        >
            <div class="task-date-picker--left">
                <InterfaceArrowsBendRight1Alternate class="icon" size="14" />
                Next Week
            </div>
            <div class="task-date-picker--right">
                {{ mondayDate }}
            </div>
        </button>
        <button
            ref="calendarPicker"
            class="task-date-picker--button"
            :class="{ highlight: highlight === 'calendar' }"
            @click="showCalendarPicker"
        >
            <div class="task-date-picker--left">
                <InterfaceCalendar class="icon" size="14" />
                Select a Date
            </div>
            <div class="task-date-picker--right">
                <InterfaceGeometricTriangle
                    class="icon-small"
                    size="6"
                    style="transform: rotate(90deg)"
                />
            </div>
        </button>
        <hr v-if="allowTimePick && hasDate" />
        <button
            v-if="allowTimePick && hasDate"
            ref="timePicker"
            class="task-date-picker--button"
            :class="{ highlight: highlight === 'start' }"
            @click="showStartTimePicker"
        >
            <div class="task-date-picker--left">
                <InterfaceTimeClockCircle class="icon" />
                Time
            </div>
            <div class="task-date-picker--right">
                {{ start }}
                <InterfaceGeometricTriangle
                    class="icon-small"
                    size="6"
                    style="transform: rotate(90deg)"
                />
            </div>
        </button>
        <button
            v-if="allowTimePick && hasDate && hasTime"
            ref="durationPicker"
            class="task-date-picker--button"
            :class="{ highlight: highlight === 'end' }"
            @click="showEndTimePicker"
        >
            <div class="task-date-picker--left">
                <InterfaceTimeClockCircle class="icon" />
                End Time
            </div>
            <div class="task-date-picker--right">
                {{ end }}
                <InterfaceGeometricTriangle
                    class="icon-small"
                    size="6"
                    style="transform: rotate(90deg)"
                />
            </div>
        </button>
        <button
            v-if="hasDate && allowTimePick"
            ref="recurrencePicker"
            class="task-date-picker--button"
            :class="{ highlight: highlight === 'recurrence' }"
            @click="showRecurrencePicker"
        >
            <div class="task-date-picker--left">
                <InterfaceTimeClockCircle class="icon" />
                Repeat
            </div>
            <div class="task-date-picker--right recurrence">
                {{ repeat }}
                <InterfaceGeometricTriangle
                    class="icon-small"
                    size="6"
                    style="transform: rotate(90deg)"
                />
            </div>
        </button>
        <hr v-if="allowClear || hasTime" />
        <button
            v-if="hasTime && allowTimePick"
            class="task-date-picker--button"
            data-e2e="task-schedule-picker-monday"
            @click="clearTime"
        >
            <div class="task-date-picker--left">
                <InterfaceDeleteSquare class="icon" size="14" />
                Clear Time
            </div>
            <div class="task-date-picker--right"></div>
        </button>
        <button
            v-if="allowClear"
            class="task-date-picker--button"
            data-e2e="task-schedule-picker-monday"
            @click="clear"
        >
            <div class="task-date-picker--left">
                <InterfaceDeleteSquare class="icon" size="14" />
                Clear Date {{ hasTime && allowTimePick ? '& Time' : '' }}
            </div>
            <div class="task-date-picker--right"></div>
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
    add,
    format,
    isSameDay,
    nextFriday,
    nextMonday,
    nextSaturday,
    nextSunday,
    nextThursday,
    nextTuesday,
    nextWednesday,
    parseISO,
    formatISO,
    differenceInMinutes,
    endOfDay,
} from 'date-fns';
import {
    DateFormat,
    extractDate,
    getRRuleFormatted,
    isAllDay,
    TimeFormat,
} from '~/helpers/date';
import InterfaceFavoriteStar from '~/components/streamline/InterfaceFavoriteStar.vue';
import InterfaceArrowsBendRight1Alternate from '~/components/streamline/InterfaceArrowsBendRight1Alternate.vue';
import InterfaceCalendar from '~/components/streamline/InterfaceCalendar.vue';
import InterfaceDeleteSquare from '~/components/streamline/InterfaceDeleteSquare.vue';
import InterfaceTimeClockCircle from '~/components/streamline/InterfaceTimeClockCircle.vue';
import InterfaceGeometricTriangle from '~/components/streamline/InterfaceGeometricTriangle.vue';
import ADropDown from '~/components/ADropDown.vue';
import MiniCalendarDropdown from '~/components/task/MiniCalendarDropdown.vue';

@Component({
    name: 'TaskDatePickerDropdown',
    components: {
        InterfaceGeometricTriangle,
        InterfaceTimeClockCircle,
        InterfaceDeleteSquare,
        InterfaceCalendar,
        InterfaceArrowsBendRight1Alternate,
        InterfaceFavoriteStar,
    },
})
export default class TaskDatePickerDropdown extends Vue {
    @Prop({ default: null })
    taskId!: string | null;

    @Prop({ default: false })
    allowClear!: boolean;

    @Prop({ default: false })
    agenda!: boolean;

    @Prop({ default: true })
    allowTimePick!: boolean;

    $refs!: {
        timePicker: HTMLElement;
        recurrencePicker: HTMLElement;
        durationPicker: HTMLElement;
        calendarPicker: HTMLElement;
    };

    highlight: string | null = null;

    get entity() {
        return this.taskId
            ? this.$store.getters['tasks/byId'](this.taskId)
            : null;
    }

    get hasDate() {
        return (
            !!this.entity?.start || (!!this.entity?.start && !!this.entity?.end)
        );
    }

    get hasTime() {
        return (
            !!this.entity?.start?.dateTime ||
            (!!this.entity?.start?.dateTime && !!this.entity?.end?.dateTime)
        );
    }

    get todayDate() {
        return format(new Date(), 'd MMM');
    }

    get tmrDate() {
        return format(add(new Date(), { days: 1 }), 'd MMM');
    }

    get mondayDate() {
        const starts = [
            nextSunday,
            nextMonday,
            nextTuesday,
            nextWednesday,
            nextThursday,
            nextFriday,
            nextSaturday,
        ];
        return format(
            starts[
                this.$store.getters['appSettings/calendarOptions'].weekdayStart
            ](new Date()),
            'd MMM',
        );
    }

    get tomorrowText() {
        return 'Tomorrow';
    }

    get mondayText() {
        return 'Next Week';
    }

    get start() {
        if (!this.hasTime || !extractDate(this.entity.start)) return 'All Day';
        return format(extractDate(this.entity.start), this.timeFormat());
    }

    get end() {
        if (!this.hasTime || !extractDate(this.entity.end)) return '';
        return format(extractDate(this.entity.end), this.timeFormat());
    }

    get repeat() {
        if (!this.hasDate || !this.entity.rrule) return '';
        const rruleString = getRRuleFormatted(this.entity.rrule);
        return rruleString[0].toUpperCase() + rruleString.slice(1);
    }

    showRecurrencePicker() {
        this.highlight = 'recurrence';
        this.$dropdown.show({
            parent: this.$refs.timePicker,
            name: 'time-picker',
            component: () =>
                import('~/components/dropdown/RecurringDropdown.vue'),
            retainFocus: true,
            popperOptions: {
                placement: 'right-start',
                modifiers: [
                    {
                        name: 'preventOverflow',
                        options: {
                            mainAxis: false,
                        },
                    },
                    {
                        name: 'offset',
                        options: {
                            offset: [-6, 10],
                        },
                    },
                ],
            },
            bind: {
                start: this.entity.start,
            },
            on: {
                update: (value: string) => {
                    this.$emit('recurrence', value);
                    this.$dropdown.hideAll();
                },
            },
            onClose: () => {
                this.highlight = null;
            },
        });
    }

    onInput(date: Date) {
        this.$emit('close');
        this.$emit('select', date);
    }

    dateFormat() {
        const dFormat =
            this.$store.getters['appSettings/dateTimeOptions'].dateFormat;

        return dFormat === DateFormat.EU ? 'd/M/yyyy' : 'M/d/yyyy';
    }

    timeFormat() {
        const tFormat =
            this.$store.getters['appSettings/dateTimeOptions'].timeFormat;

        return tFormat === TimeFormat.HOUR_24 ? 'H:mm' : 'h:mmaa';
    }

    clear() {
        this.$emit('close');
        this.$emit('clear');
    }

    clearTime() {
        this.$emit('clear-time');
    }

    moveToToday() {
        this.$emit('close');
        this.$emit('today');
    }

    moveToTomorrow() {
        this.$emit('close');
        this.$emit('tomorrow');
    }

    moveToMonday() {
        this.$emit('close');
        this.$emit('next-week');
    }

    onStartTimePicked(value: Date | null) {
        if (!value) {
            this.$emit('clear-time');
            return;
        }
        const oldStart = extractDate(this.entity.start) ?? null;
        const oldEnd = extractDate(this.entity.end) ?? null;
        let newEnd = null;
        if (oldStart && oldEnd) {
            const duration = differenceInMinutes(oldEnd, oldStart);
            newEnd = add(value, {
                minutes: duration,
            });
        }
        if (newEnd && !isSameDay(value, newEnd)) {
            newEnd = endOfDay(value);
        }
        this.$emit('pick-time', {
            start: value,
            end: newEnd,
        });
    }

    onEndTimePicked(value: Date | null) {
        this.$emit('pick-time', {
            start: extractDate(this.entity.start),
            end: value,
        });
    }

    showStartTimePicker() {
        this.highlight = 'start';
        const value =
            this.entity.start && !isAllDay(this.entity.start)
                ? formatISO(extractDate(this.entity.start)) ?? null
                : null;
        const mountFocus =
            this.entity.start && !isAllDay(this.entity.start)
                ? formatISO(extractDate(this.entity.start)) ?? null
                : this.$entities.task.getClosestValidTime();
        this.$dropdown.show({
            parent: this.$refs.timePicker,
            name: 'time-picker',
            component: ADropDown,
            retainFocus: true,
            popperOptions: {
                placement: 'right-start',
                modifiers: [
                    {
                        name: 'preventOverflow',
                        options: {
                            mainAxis: false,
                        },
                    },
                    {
                        name: 'offset',
                        options: {
                            offset: [-6, 10],
                        },
                    },
                ],
            },
            bind: {
                items: this.$entities.task.getStartTimes(),
                value,
                search: true,
                clear: true,
                multi: false,
                searchPlaceholder: 'Pick Time',
                checkPlacement: 'end',
                allowNew: false,
                closeOnUpdate: true,
                focusElementOnMounted: mountFocus,
            },
            on: {
                change: (value: string | null) => {
                    this.onStartTimePicked(value ? parseISO(value) : null);
                },
            },
            onClose: () => {
                this.highlight = null;
            },
        });
    }

    showEndTimePicker() {
        this.highlight = 'end';
        const value =
            this.entity.end && !isAllDay(this.entity.end)
                ? formatISO(extractDate(this.entity.end)) ?? null
                : null;
        this.$dropdown.show({
            parent: this.$refs.durationPicker,
            name: 'duration-picker',
            component: ADropDown,
            retainFocus: true,
            popperOptions: {
                placement: 'right-start',
                modifiers: [
                    {
                        name: 'preventOverflow',
                        options: {
                            mainAxis: false,
                        },
                    },
                    {
                        name: 'offset',
                        options: {
                            offset: [-6, 10],
                        },
                    },
                ],
            },
            bind: {
                items: this.$entities.task.getEndTimes(
                    extractDate(this.entity.start),
                ),
                value,
                search: true,
                clear: true,
                multi: false,
                searchPlaceholder: 'Pick End Time',
                checkPlacement: 'end',
                allowNew: false,
                closeOnUpdate: true,
            },
            on: {
                change: (value: string | null) => {
                    this.onEndTimePicked(value ? parseISO(value) : null);
                },
            },
            onClose: () => {
                this.highlight = null;
            },
        });
    }

    showCalendarPicker() {
        this.highlight = 'calendar';
        this.$dropdown.show({
            parent: this.$refs.calendarPicker,
            name: 'calendar-picker',
            component: MiniCalendarDropdown,
            retainFocus: false,
            popperOptions: {
                placement: 'right-start',
                modifiers: [
                    {
                        name: 'preventOverflow',
                        options: {
                            mainAxis: false,
                        },
                    },
                    {
                        name: 'offset',
                        options: {
                            offset: [-6, 10],
                        },
                    },
                ],
            },
            bind: {
                highlightDay: this.hasDate
                    ? extractDate(this.entity.start)
                    : new Date(),
            },
            on: {
                change: (value: Date) => {
                    this.onInput(value);
                },
            },
            onClose: () => {
                this.highlight = null;
            },
        });
    }
}
</script>

<style scoped lang="scss">
.task-date-picker {
    @include contextMenu(206px);
    @include frostedGlassBackground;

    &--title {
        @include font10-700;
        padding: 3px 8px 0;
        color: var(--context-menu-section-title);
        text-transform: uppercase;
    }

    &--left {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .icon.this-day {
            margin-left: 2px;
            margin-right: 14px;
        }
    }

    &--right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: var(--context-menu-tooltip-keys-color);
        gap: 4px;

        &.recurrence {
            margin-left: 4px;
        }
    }

    &--button {
        justify-content: space-between;

        &.highlight {
            color: var(--context-menu-button-text-color__hover);
            @include frostedGlassButton;

            .icon,
            .small-icon {
                color: var(--context-menu-button-icon-color__hover);
            }
        }
    }
}
</style>
