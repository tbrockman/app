<template>
    <svg :width="size" :height="size" fill="currentColor" viewBox="0 0 24 24">
        <g>
            <path
                d="M11 17H9v-4H5v4H3V7h2v4h4V7h2v10zm10-2h-1v2h-2v-2h-5v-2l4.05-6H20v6h1v2zm-3-2V9l-2.79 4H18z"
            />
        </g>
    </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Header4 extends Vue {
    @Prop({ default: 20 }) readonly size: number | undefined;
}
</script>
