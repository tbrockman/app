<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13,2.5H1a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1v-7A1,1,0,0,0,13,2.5ZM3.5,9a2,2,0,1,1,2-2A2,2,0,0,1,3.5,9Zm8,.25h-3a.75.75,0,0,1,0-1.5h3a.75.75,0,0,1,0,1.5Zm0-3h-3a.75.75,0,0,1,0-1.5h3a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ShoppingBusinessCard',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
