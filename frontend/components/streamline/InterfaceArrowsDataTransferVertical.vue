<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10.5,0h-7A3.5,3.5,0,0,0,0,3.5v7A3.5,3.5,0,0,0,3.5,14h7A3.5,3.5,0,0,0,14,10.5v-7A3.5,3.5,0,0,0,10.5,0ZM6,10a.75.75,0,0,1-1.5,0V6.41a.25.25,0,0,0-.15-.23.26.26,0,0,0-.28.06l-.29.29A.75.75,0,0,1,2.72,5.47l2-2A.75.75,0,0,1,6,4Zm5.28-1.47-2,2a.77.77,0,0,1-.53.22.75.75,0,0,1-.29-.06A.74.74,0,0,1,8,10V4A.75.75,0,0,1,9.5,4V7.59a.25.25,0,0,0,.15.23.26.26,0,0,0,.28-.06l.29-.29a.75.75,0,0,1,1.06,1.06Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsDataTransferVertical',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
