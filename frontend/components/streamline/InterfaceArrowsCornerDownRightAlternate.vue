<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10.7,8.93a.24.24,0,0,1-.35,0L1.71.29A1,1,0,0,0,.29,1.71l8.64,8.64a.24.24,0,0,1,0,.35L7.34,12.29A1,1,0,0,0,8.05,14H13a1,1,0,0,0,1-1V8.05a1,1,0,0,0-1.71-.71Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsCornerDownRightAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
