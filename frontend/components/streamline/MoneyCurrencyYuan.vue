<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.75.2a1,1,0,0,0-1.4.2L7.2,4.61a.25.25,0,0,1-.4,0L3.65.4A1,1,0,0,0,2.25.2a1,1,0,0,0-.2,1.4L5.42,6.1a.23.23,0,0,1,0,.26.23.23,0,0,1-.22.14H3.77a1,1,0,1,0,0,2h2A.25.25,0,0,1,6,8.75v1a.25.25,0,0,1-.25.25h-2a1,1,0,1,0,0,2h2a.25.25,0,0,1,.25.25V13a1,1,0,0,0,2,0v-.75A.25.25,0,0,1,8.25,12h2a1,1,0,0,0,0-2h-2A.25.25,0,0,1,8,9.75v-1a.25.25,0,0,1,.25-.25h2a1,1,0,0,0,0-2H8.78a.23.23,0,0,1-.22-.14.23.23,0,0,1,0-.26L12,1.6A1,1,0,0,0,11.75.2Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MoneyCurrencyYuan',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
