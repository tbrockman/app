<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M4.51,14H13a1,1,0,0,0,1-1V4.51a1,1,0,1,0-2,0V10a.25.25,0,0,1-.15.23.26.26,0,0,1-.28-.05L1.71.29A1,1,0,0,0,.29,1.71l9.87,9.86a.26.26,0,0,1,.05.28A.25.25,0,0,1,10,12H4.51a1,1,0,1,0,0,2Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsCornerDownRight',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
