<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM9.5,3.5A1.25,1.25,0,1,1,8.25,4.75,1.25,1.25,0,0,1,9.5,3.5Zm-5,0A1.25,1.25,0,1,1,3.25,4.75,1.25,1.25,0,0,1,4.5,3.5Zm6,6.62h-7a.62.62,0,1,1,0-1.24h7a.62.62,0,0,1,0,1.24Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MailSmileyStraightFace',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
