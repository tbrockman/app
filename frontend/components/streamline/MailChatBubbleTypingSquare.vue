<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1.25A1.25,1.25,0,0,0,12.75,0H2.25A1.25,1.25,0,0,0,1,1.25v9.11a.29.29,0,0,1,0,.09L.05,13a.75.75,0,0,0,.7,1,.63.63,0,0,0,.19,0l3.6-1h8.21A1.25,1.25,0,0,0,14,11.75ZM3.75,7.5A1.25,1.25,0,1,1,5,6.25,1.25,1.25,0,0,1,3.75,7.5Zm3.75,0A1.25,1.25,0,1,1,8.75,6.25,1.25,1.25,0,0,1,7.5,7.5Zm3.75,0A1.25,1.25,0,1,1,12.5,6.25,1.25,1.25,0,0,1,11.25,7.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MailChatBubbleTypingSquare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
