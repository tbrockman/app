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
                d="M1.5,14A1.5,1.5,0,0,1,.09,12L1,9.57a.29.29,0,0,0,0-.09V2A2,2,0,0,1,3,0h9a2,2,0,0,1,2,2v9a2,2,0,0,1-2,2H5.38L1.89,14A1.74,1.74,0,0,1,1.5,14ZM3,1.5a.5.5,0,0,0-.5.5V9.66a.8.8,0,0,1,0,.26l-1,2.58,3.62-1a.69.69,0,0,1,.2,0H12a.5.5,0,0,0,.5-.5V2a.5.5,0,0,0-.5-.5Z"
            />
            <circle cx="7.5" cy="9.25" r="1.25" />
            <path d="M8.5,6a1,1,0,0,1-2,0V3.5a1,1,0,0,1,2,0Z" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MailChatBubbleSquareWarningAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
