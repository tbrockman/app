<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M9.49,0H1A1,1,0,0,0,0,1V9.49a1,1,0,0,0,2,0V4a.25.25,0,0,1,.15-.23.26.26,0,0,1,.28,0l9.86,9.87a1,1,0,0,0,1.42-1.42L3.84,2.43a.26.26,0,0,1,0-.28A.25.25,0,0,1,4,2H9.49a1,1,0,0,0,0-2Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsCornerUpLeft',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
