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
                d="M14,2.5a2.5,2.5,0,0,0-5-.43A3,3,0,0,0,9,2.5a2.5,2.5,0,0,0,.73,1.77,3,3,0,0,0,.57.41A2.41,2.41,0,0,0,11.5,5h.05A3.44,3.44,0,0,0,12,5h0A2.5,2.5,0,0,0,14,2.5Z"
            />
            <path
                d="M7.5,2.5c0-.08,0-.15,0-.22A.24.24,0,0,0,7.27,2h-5A1.25,1.25,0,0,0,1,3.25v7.11a.29.29,0,0,1,0,.09L.05,13a.74.74,0,0,0,.89,1l3.6-1h6.21A1.25,1.25,0,0,0,12,11.75v-5a.24.24,0,0,0-.28-.24H11.5A4,4,0,0,1,7.5,2.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MailChatBubbleSquareNotification',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
