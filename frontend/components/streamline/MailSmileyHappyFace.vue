<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM9.5,3.5A1.25,1.25,0,1,1,8.25,4.75,1.25,1.25,0,0,1,9.5,3.5Zm-5,0A1.25,1.25,0,1,1,3.25,4.75,1.25,1.25,0,0,1,4.5,3.5Zm6.6,5.18a4.33,4.33,0,0,1-8.2,0,.63.63,0,1,1,1.2-.36,3.07,3.07,0,0,0,5.8,0,.63.63,0,0,1,1.2.36Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MailSmileyHappyFace',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
