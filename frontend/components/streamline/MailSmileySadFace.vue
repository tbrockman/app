<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM9.75,3.5A1.25,1.25,0,1,1,8.5,4.75,1.25,1.25,0,0,1,9.75,3.5Zm-5.5,0A1.25,1.25,0,1,1,3,4.75,1.25,1.25,0,0,1,4.25,3.5Zm6.43,7.72a.63.63,0,0,1-.78-.42,3.08,3.08,0,0,0-5.8,0,.63.63,0,0,1-1.2-.35,4.32,4.32,0,0,1,8.2,0A.62.62,0,0,1,10.68,11.22Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MailSmileySadFace',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
