<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M6.71,13.21a1,1,0,0,0,0-1.42L3.84,8.93a.26.26,0,0,1,0-.28A.25.25,0,0,1,4,8.5H9a5,5,0,0,0,5-5v-2a1,1,0,0,0-2,0v2a3,3,0,0,1-3,3H4a.25.25,0,0,1-.23-.15.26.26,0,0,1,0-.28L6.71,3.21A1,1,0,0,0,5.29,1.79l-5,5a1,1,0,0,0,0,1.42l5,5A1,1,0,0,0,6.71,13.21Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsBendDownLeft2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
