<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.71,3.4a1,1,0,0,0-1.42,0L7.18,8.51a.25.25,0,0,1-.36,0L1.71,3.4a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l5.65,5.65a1.5,1.5,0,0,0,2.12,0l5.65-5.65A1,1,0,0,0,13.71,3.4Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsButtonDown',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
