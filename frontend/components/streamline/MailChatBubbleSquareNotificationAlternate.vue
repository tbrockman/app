<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="11.5" cy="2.5" r="2.5" />
            <path
                d="M11.5,6.5a4.05,4.05,0,0,1-.7-.07.23.23,0,0,0-.21.05.25.25,0,0,0-.09.19V11a.5.5,0,0,1-.5.5H5.32a.69.69,0,0,0-.2,0L2,12.37a.25.25,0,0,1-.3-.32l.78-2.13a.8.8,0,0,0,0-.26V4A.5.5,0,0,1,3,3.5H7.33a.25.25,0,0,0,.19-.09.23.23,0,0,0,.05-.21,4.05,4.05,0,0,1-.07-.7c0-.08,0-.15,0-.22A.24.24,0,0,0,7.27,2H3A2,2,0,0,0,1,4V9.52L.09,12a1.5,1.5,0,0,0,1.8,2L5.42,13H10a2,2,0,0,0,2-2V6.73a.24.24,0,0,0-.28-.24Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MailChatBubbleSquareNotificationAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
