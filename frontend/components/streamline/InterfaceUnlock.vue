<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11,5.5H4.75a.25.25,0,0,1-.25-.25V4.5A2.5,2.5,0,0,1,8.77,2.73a1,1,0,0,0,1.41-1.41A4.5,4.5,0,0,0,2.5,4.5v.92a.27.27,0,0,1-.14.23A1.49,1.49,0,0,0,1.5,7v5.5A1.5,1.5,0,0,0,3,14h8a1.5,1.5,0,0,0,1.5-1.5V7A1.5,1.5,0,0,0,11,5.5ZM7,11A1.25,1.25,0,1,1,8.25,9.75,1.25,1.25,0,0,1,7,11Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUnlock',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
