<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0A7,7,0,0,0,0,7a6.89,6.89,0,0,0,1,3.55.25.25,0,0,1,0,.22L0,13.32a.51.51,0,0,0,.09.5A.46.46,0,0,0,.5,14H.59L4,13.37a.22.22,0,0,1,.14,0A7,7,0,1,0,7,0ZM3.25,8.25A1.25,1.25,0,1,1,4.5,7,1.25,1.25,0,0,1,3.25,8.25ZM7,8.25A1.25,1.25,0,1,1,8.25,7,1.25,1.25,0,0,1,7,8.25Zm3.75,0A1.25,1.25,0,1,1,12,7,1.25,1.25,0,0,1,10.75,8.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MailChatBubbleTypingOval',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
