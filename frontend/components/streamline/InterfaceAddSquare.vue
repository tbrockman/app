<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10.5,0h-7A3.5,3.5,0,0,0,0,3.5v7A3.5,3.5,0,0,0,3.5,14h7A3.5,3.5,0,0,0,14,10.5v-7A3.5,3.5,0,0,0,10.5,0ZM10,8H8.25A.25.25,0,0,0,8,8.25V10a1,1,0,0,1-2,0V8.25A.25.25,0,0,0,5.75,8H4A1,1,0,0,1,4,6H5.75A.25.25,0,0,0,6,5.75V4A1,1,0,0,1,8,4V5.75A.25.25,0,0,0,8.25,6H10a1,1,0,0,1,0,2Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAddSquare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
