<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M3.3,5.07a.24.24,0,0,1,.35,0l8.64,8.64a1,1,0,0,0,1.42-1.42L5.07,3.65a.24.24,0,0,1,0-.35L6.66,1.71A1,1,0,0,0,6,0H1A1,1,0,0,0,0,1V6a1,1,0,0,0,1.71.71Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsCornerUpLeftAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
