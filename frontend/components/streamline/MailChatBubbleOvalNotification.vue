<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path
                d="M11.5,0A2.5,2.5,0,0,0,9,2.5a2.48,2.48,0,0,0,.12.73v0a2.47,2.47,0,0,0,1.62,1.62h0a2.59,2.59,0,0,0,.4.09h0l.33,0a2.5,2.5,0,0,0,0-5Z"
            />
            <path
                d="M11.5,6.5a4,4,0,0,1-4-4V2.42a.24.24,0,0,0-.19-.27A5.66,5.66,0,0,0,6,2,6,6,0,0,0,.82,11a.25.25,0,0,1,0,.22L0,13.42A.43.43,0,0,0,.51,14l2.91-.53a.26.26,0,0,1,.15,0A5.83,5.83,0,0,0,6,14a6,6,0,0,0,6-6,5.66,5.66,0,0,0-.15-1.31.24.24,0,0,0-.27-.19Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MailChatBubbleOvalNotification',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
