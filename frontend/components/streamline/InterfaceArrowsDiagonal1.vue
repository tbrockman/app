<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1a1,1,0,0,0-1-1H6A1,1,0,0,0,6,2h4a.25.25,0,0,1,.23.15.26.26,0,0,1-.05.28L2.43,10.16a.26.26,0,0,1-.28.05A.25.25,0,0,1,2,10V6A1,1,0,0,0,0,6v7a1,1,0,0,0,1,1H8a1,1,0,0,0,0-2H4a.25.25,0,0,1-.23-.15.26.26,0,0,1,0-.28l7.73-7.73a.26.26,0,0,1,.28,0A.25.25,0,0,1,12,4V8a1,1,0,0,0,2,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsDiagonal1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
