<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        :height="size"
        viewBox="0 0 20 20"
    >
        <path
            fill="currentColor"
            d="M16 2H7.979C6.88 2 6 2.88 6 3.98V12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10H8V4h8v8zM4 10H2v6c0 1.1.9 2 2 2h6v-2H4v-6z"
        ></path>
    </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class OpenPopupIcon extends Vue {
    @Prop({ default: '20' }) readonly size: string | undefined;
}
</script>
