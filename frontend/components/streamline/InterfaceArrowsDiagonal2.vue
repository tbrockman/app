<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13,14a1,1,0,0,0,1-1V6a1,1,0,0,0-2,0v4a.25.25,0,0,1-.15.23.26.26,0,0,1-.28-.05L3.84,2.43a.26.26,0,0,1,0-.28A.25.25,0,0,1,4,2H8A1,1,0,0,0,8,0H1A1,1,0,0,0,0,1V8A1,1,0,0,0,2,8V4a.25.25,0,0,1,.15-.23.26.26,0,0,1,.28,0l7.73,7.73a.26.26,0,0,1,.05.28A.25.25,0,0,1,10,12H6a1,1,0,0,0,0,2Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsDiagonal2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
