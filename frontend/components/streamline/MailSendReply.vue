<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.78,12.91a.49.49,0,0,0,.19-.57c-.1-.3-.2-.62-.3-.95C12.75,8.45,11.36,4,6.5,4H6.25A.25.25,0,0,1,6,3.75V1.5A.5.5,0,0,0,5.69,1a.48.48,0,0,0-.54.11l-5,5a.5.5,0,0,0,0,.69l5,5.5A.5.5,0,0,0,6,12V9.75a.25.25,0,0,1,.25-.25H7c2.27,0,3,.66,5.07,2.43.33.29.7.61,1.11,1a.48.48,0,0,0,.6,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MailSendReply',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
