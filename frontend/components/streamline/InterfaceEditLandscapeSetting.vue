<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <rect y="2.5" width="14" height="9" rx="1.5" />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditLandscapeSetting',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
