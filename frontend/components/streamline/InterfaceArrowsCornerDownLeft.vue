<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M0,4.51V13a1,1,0,0,0,1,1H9.49a1,1,0,1,0,0-2H4a.25.25,0,0,1-.23-.15.26.26,0,0,1,0-.28l9.87-9.86A1,1,0,1,0,12.29.29L2.43,10.16a.26.26,0,0,1-.28.05A.25.25,0,0,1,2,10V4.51a1,1,0,0,0-2,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsCornerDownLeft',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
