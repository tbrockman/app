<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';
import { differenceInMinutes, format } from 'date-fns';
import { IEvent } from '~/@types';
import { TaskDateObject } from '~/components/task/model';
import { isAllDay, TimeFormat } from '~/helpers/date';

export default class CalendarEntityMixin extends Vue {
    @Prop({ required: true })
    event!: any;

    @Prop({ required: true })
    now!: Date;

    getFormattedTime(
        event: IEvent & {
            startObject: TaskDateObject;
            endObject: TaskDateObject;
        },
    ) {
        if (isAllDay(event.startObject)) {
            return {
                type: 'allday',
                text: '',
            };
        }

        const tFormat =
            this.$store.getters['appSettings/dateTimeOptions'].timeFormat;
        const start = event.start?.date!;
        const end = event.end?.date!;

        const diff = differenceInMinutes(end, start);

        if (tFormat === TimeFormat.HOUR_24) {
            if (diff >= 45) {
                return {
                    type: 'duration',
                    text: `${format(start, 'H:mm')}-${format(end, 'H:mm')}`,
                };
            }

            return {
                type: 'start',
                text: format(start, 'H:mm'),
            };
        }

        if (diff >= 45) {
            const showBothMeridiems = format(start, 'aa') !== format(end, 'aa');
            const showStartMinutes = format(start, 'mm') !== '00';
            const showEndMinutes = format(end, 'mm') !== '00';

            const startFormat = `h${showStartMinutes ? ':mm' : ''}${
                showBothMeridiems ? ' aa' : ''
            }`;
            const endFormat = `h${showEndMinutes ? ':mm' : ''} aa`;

            return {
                type: 'duration',
                text: `${format(start, startFormat)}-${format(end, endFormat)}`,
            };
        }

        const showMinutes = format(start, 'mm') !== '00';
        const timeForamt = `h${showMinutes ? ':mm' : ''} aa`;

        return {
            type: 'start',
            text: format(start, timeForamt),
        };
    }

    getLineClamp(event: any) {
        return this.$utils.calendar.getLineClamp(event);
    }
}
</script>
