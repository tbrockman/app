<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M2.47,13.78.22,11.53a.75.75,0,0,1,1.06-1.06l.54.54a.26.26,0,0,0,.28.06.25.25,0,0,0,.15-.23V2.75a2.75,2.75,0,0,1,5.5,0v8.5a1.25,1.25,0,0,0,2.5,0V.75a.74.74,0,0,1,.46-.69.75.75,0,0,1,.82.16l2.25,2.25a.75.75,0,0,1-1.06,1.06L12.18,3a.26.26,0,0,0-.28-.06.25.25,0,0,0-.15.23v8.09a2.75,2.75,0,0,1-5.5,0V2.75a1.25,1.25,0,0,0-2.5,0v10.5a.75.75,0,0,1-1.28.53Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsButtonZigzag',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
