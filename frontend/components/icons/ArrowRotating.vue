<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
    >
        <path
            fill="currentColor"
            d="M12 5c4.97 0 9 2.69 9 6c0 1.68-1.04 3.2-2.71 4.29c1.07-.87 1.71-1.97 1.71-3.16C20 9.29 16.42 7 12 7v3L8 6l4-4v3m0 14c-4.97 0-9-2.69-9-6c0-1.68 1.04-3.2 2.71-4.29C4.64 9.58 4 10.68 4 11.88C4 14.71 7.58 17 12 17v-3l4 4l-4 4v-3Z"
        ></path>
    </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ArrowRotatingIcon extends Vue {
    @Prop({ default: 20 }) readonly size: number | undefined;
}
</script>
