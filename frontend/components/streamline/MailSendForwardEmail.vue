<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.87,6.84a.5.5,0,0,0,0-.69l-5-5A.48.48,0,0,0,8.31,1,.5.5,0,0,0,8,1.5V3.75A.25.25,0,0,1,7.75,4H7.5C2.64,4,1.25,8.45.33,11.39c-.1.33-.2.65-.3.95a.49.49,0,0,0,.19.57A.47.47,0,0,0,.5,13a.47.47,0,0,0,.32-.12c.41-.34.78-.66,1.11-1C4,10.16,4.73,9.5,7,9.5h.75A.25.25,0,0,1,8,9.75V12a.5.5,0,0,0,.87.34Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MailSendForwardEmail',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
