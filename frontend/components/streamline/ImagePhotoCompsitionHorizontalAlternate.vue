<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M1.23,12a1.24,1.24,0,0,1-.69-.21,1.25,1.25,0,0,1-.54-1V3.26A1.24,1.24,0,0,1,1.7,2.12a13.46,13.46,0,0,0,10.6,0A1.23,1.23,0,0,1,14,3.26v7.48a1.24,1.24,0,0,1-1.7,1.14h0a13.46,13.46,0,0,0-10.6,0A1.27,1.27,0,0,1,1.23,12Zm.61-8.19a.3.3,0,0,0-.23,0A.26.26,0,0,0,1.5,4v6a.26.26,0,0,0,.11.21.3.3,0,0,0,.23,0,14.67,14.67,0,0,1,10.32,0,.3.3,0,0,0,.23,0A.26.26,0,0,0,12.5,10V4a.26.26,0,0,0-.11-.21.3.3,0,0,0-.23,0A14.67,14.67,0,0,1,1.84,3.78Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ImagePhotoCompsitionHorizontalAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
