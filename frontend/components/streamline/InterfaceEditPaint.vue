<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.73,4.67A7,7,0,1,0,7.13,14,7.39,7.39,0,0,0,9,13.75,1.4,1.4,0,0,0,8.63,11a1.5,1.5,0,0,1,0-3h2.74a2.51,2.51,0,0,0,2.36-3.33ZM3.75,7A1.25,1.25,0,1,1,5,5.75,1.25,1.25,0,0,1,3.75,7Zm4-2A1.25,1.25,0,1,1,9,3.75,1.25,1.25,0,0,1,7.75,5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditPaint',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
