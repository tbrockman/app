<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.64,5.65a.27.27,0,0,1-.14-.23V4.5a4.5,4.5,0,0,0-9,0v.92a.27.27,0,0,1-.14.23A1.49,1.49,0,0,0,1.5,7v5.5A1.5,1.5,0,0,0,3,14h8a1.5,1.5,0,0,0,1.5-1.5V7A1.49,1.49,0,0,0,11.64,5.65ZM7,11A1.25,1.25,0,1,1,8.25,9.75,1.25,1.25,0,0,1,7,11ZM9.5,5.25a.25.25,0,0,1-.25.25H4.75a.25.25,0,0,1-.25-.25V4.5a2.5,2.5,0,0,1,5,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceLock',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
