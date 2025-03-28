<template>
    <div class="issue-clip-trigger" :class="{ 'has-doc': clip }">
        <button
            class="issue-clip-trigger--redirect has-tippy"
            :data-tippy-content="
                clip
                    ? `<div tabindex='-1' class='tooltip'>Go to ${clip.title}</div>`
                    : `<div tabindex='-1' class='tooltip'>Add Page</div>`
            "
            @click.prevent.stop="handleClick"
        >
            <div v-if="clip" class="issue-clip-trigger--page">
                <div class="issue-clip-trigger--wrapper">
                    <DocumentIcon :document="clip" />
                    <div class="issue-clip-trigger--bg">
                        <DocumentIcon :document="clip" />
                    </div>
                </div>
                <AcreomChevronRight class="icon redirect-icon" />
            </div>
            <InterfaceAdd1 v-else class="icon plus" size="12" />
        </button>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GithubIssue, GithubPullRequest } from '~/components/github/github';
import InterfaceAdd1 from '~/components/streamline/InterfaceAdd1.vue';
import AcreomChevronRight from '~/components/icons/AcreomChevronRight.vue';
import { TabType } from '~/constants';
import GithubIcon from '~/components/icons/GithubIcon.vue';
import DocumentIcon from '~/components/document/DocumentIcon.vue';
import {
    TrackingAction,
    TrackingActionSource,
    TrackingActionSourceMeta,
    TrackingType,
} from '~/@types/tracking';
import { isGithubPullRequest } from '~/plugins/entities/github';

@Component({
    name: 'GithubClipButton',
    components: { DocumentIcon, GithubIcon, AcreomChevronRight, InterfaceAdd1 },
})
export default class GithubClipButton extends Vue {
    @Prop({ required: true })
    entity!: GithubIssue | GithubPullRequest;

    @Prop({ default: null })
    source!: TrackingActionSource | null;

    get clip() {
        return this.$entities.github.getClip(this.entity.id);
    }

    async handleClick() {
        this.$emit('close');
        if (this.clip) {
            const tab = this.$tabs.createNewTabObject(
                this.clip.id,
                TabType.DOCUMENT,
            );

            this.$tracking.trackEventV2(TrackingType.PAGE, {
                action: TrackingAction.OPEN,
                source: this.source,
                sourceMeta: isGithubPullRequest(this.entity)
                    ? TrackingActionSourceMeta.GITHUB_PULL_REQUEST
                    : TrackingActionSourceMeta.GITHUB_ISSUE,
            });

            this.$tabs.openTab(tab);
            return;
        }

        const id = await this.$entities.github.createPageFromEntity(
            this.entity,
        );

        this.$tracking.trackEventV2(TrackingType.PAGE, {
            action: TrackingAction.ADD_CLIP,
            source: this.source,
            sourceMeta: isGithubPullRequest(this.entity)
                ? TrackingActionSourceMeta.GITHUB_PULL_REQUEST
                : TrackingActionSourceMeta.GITHUB_ISSUE,
            entityId: id,
        });

        this.$tracking.trackEventV2(TrackingType.PAGE, {
            action: TrackingAction.CREATE,
            source: this.source,
            sourceMeta: isGithubPullRequest(this.entity)
                ? TrackingActionSourceMeta.GITHUB_PULL_REQUEST
                : TrackingActionSourceMeta.GITHUB_ISSUE,
            entityId: id,
        });
    }
}
</script>
<style lang="scss" scoped>
.issue-clip-trigger {
    width: 64px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 30px;
    background: var(--issue-clip-trigger-bg-color);
    overflow: hidden;

    &.has-doc {
        background: var(--issue-clip-trigger-bg-color__has-doc);
    }

    &.highlighted:not(.has-doc) {
        .plus {
            color: var(--issue-clip-trigger-icon-color__highlight);
        }

        background: var(--issue-clip-trigger-bg-color__highlight);

        &:hover {
            background: var(--issue-clip-trigger-bg-color__highlight__hover);
        }
    }

    .redirect-icon {
        display: none;
    }

    &--redirect {
        width: 100%;
        height: 100%;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &--wrapper {
        display: flex;
        align-items: center;
        gap: 7px;
        position: relative;
    }

    &--bg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(2);
        filter: blur(10px) brightness(120%);
    }

    .plus {
        color: var(--issue-clip-trigger-icon-color);
    }

    &--tasks {
        @include font10-700;
        @include ellipsis;
        width: 100%;
        color: var(--issue-clip-trigger-tasks-color);
    }

    &:hover {
        background: var(--issue-clip-trigger-bg-color__hover);

        .issue-clip-trigger--wrapper {
            display: none;
        }

        .redirect-icon {
            display: block;
        }

        .icon {
            color: var(--issue-clip-trigger-icon-color__hover);
        }
    }
}
</style>
