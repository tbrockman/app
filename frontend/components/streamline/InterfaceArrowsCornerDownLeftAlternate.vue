<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M5.07,10.7a.24.24,0,0,1,0-.35l8.64-8.64A1,1,0,1,0,12.29.29L3.65,8.93a.24.24,0,0,1-.35,0L1.71,7.34A1,1,0,0,0,0,8.05V13a1,1,0,0,0,1,1H6a1,1,0,0,0,.71-1.71Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsCornerDownLeftAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
