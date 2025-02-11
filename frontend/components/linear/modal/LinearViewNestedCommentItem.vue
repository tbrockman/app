<template>
    <div class="linear-issue-nested-comment">
        <div class="linear-issue-nested-comment__header">
            <div class="linear-issue-nested-comment__header__name">
                {{ actorName }} <span>replied</span>
            </div>
            <div class="linear-issue-nested-comment__header__date">
                {{ formattedDateTime }}
            </div>
        </div>
        <div class="linear-issue-nested-comment__body">
            <BasicEditor :value="content" />
        </div>
        <div class="linear-issue-nested-comment__divider"></div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { formatDistanceToNowStrict } from 'date-fns';
import LinearStateIcon from '~/components/linear/icons/LinearStateIcon.vue';
import LinearLabelIcon from '~/components/linear/icons/LinearLabelIcon.vue';
import BasicEditor from '~/components/linear/modal/LinearDescriptionEditor.vue';
import LinearUserIcon from '~/components/linear/icons/LinearUserIcon.vue';

@Component({
    name: 'LinearViewNestedCommentItem',
    components: {
        LinearUserIcon,
        BasicEditor,
        LinearLabelIcon,
        LinearStateIcon,
    },
})
export default class LinearViewNestedCommentItem extends Vue {
    @Prop({ required: true })
    issueId!: string;

    @Prop({ default: null })
    item!: any;

    get actorName() {
        return this.actor?.displayName ?? this.actor.name;
    }

    get actor() {
        if (this.item.botActor) {
            return this.item.botActor;
        }
        return this.$entities.linear.getById(this.item.userId);
    }

    get content() {
        return JSON.parse(this.item.bodyData);
    }

    get formattedDateTime() {
        const date = new Date(this.item.createdAt);
        return formatDistanceToNowStrict(date, {
            addSuffix: true,
            unit: 'second'
        });
    }
}
</script>
<style lang="scss" scoped>
.linear-issue-nested-comment {
    border-radius: 6px;
    background: var(--jira-activity-button-bg-color);
    width: 100%;
    padding: 8px 14px;
    margin-top: 8px;

    &:last-of-type {
        .linear-issue-nested-comment__divider {
            display: none;
        }
    }

    &__header {
        @include font14-500;
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 8px;

        &__name {
            @include font12-700;
            color: var(--github-timeline-author-color);

            span {
                @include font12-400;
                color: var(--github-timeline-text-color);
                font-weight: 400;
            }
        }

        &__date {
            @include font12-400;
            color: var(--github-timeline-date-color);
            font-weight: 400;
            position: relative;
            white-space: nowrap;
        }
    }

    &__body {
        :deep(table th),
        :deep(table td) {
            border: 1px solid var(--editor-table-border-color);
            padding: 3px 7px;
        }

        :deep(h1) {
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 1rem;
        }

        :deep(h2) {
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 1rem;
        }

        :deep(h3) {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 1rem;
        }

        :deep(h4) {
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 1rem;
        }

        :deep(h5) {
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 1rem;
        }

        :deep(*) {
            font-size: 14px;
        }

        :deep(h6) {
            font-weight: bold;
            font-size: 12px;
            margin-bottom: 1rem;
        }

        :deep(a) {
            color: var(--accent-color);

            &:hover {
                text-decoration: underline;
            }
        }

        :deep(code),
        :deep(pre) {
            background: var(--editor-code-bg-color);
        }

        :deep(pre) {
            padding: 4px 8px;
            border-radius: 6px;
            overflow: auto;
        }

        :deep(hr) {
            margin: 14px 0;
            border-color: var(--editor-hr-color);
        }
    }
}
</style>
