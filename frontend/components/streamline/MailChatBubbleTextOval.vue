<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0A7,7,0,0,0,0,7a6.89,6.89,0,0,0,1,3.55.25.25,0,0,1,0,.22L0,13.32a.51.51,0,0,0,.09.5A.46.46,0,0,0,.5,14H.59L4,13.37a.22.22,0,0,1,.14,0A7,7,0,1,0,7,0ZM8.5,9.5h-4A.75.75,0,0,1,4.5,8h4a.75.75,0,0,1,0,1.5Zm2-3.5h-6a.75.75,0,0,1,0-1.5h6a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MailChatBubbleTextOval',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
