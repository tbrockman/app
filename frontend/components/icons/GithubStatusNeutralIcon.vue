<template>
    <svg viewBox="0 0 16 16" fill="currentColor" :width="size" :height="size">
        <path
            d="M5.75 4h4.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 10.25 12h-4.5A1.75 1.75 0 0 1 4 10.25v-4.5C4 4.784 4.784 4 5.75 4Z"
        ></path>
    </svg>
</template>
<script>
export default {
    name: 'GithubStatusNeutralIcon',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
