<template>
    <svg :width="size" :height="size" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
            d="M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z"
        />
    </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ClearFormattingIcon extends Vue {
    @Prop({ default: 20 }) readonly size: number | undefined;
}
</script>
