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
                d="M12.24,3.18a.25.25,0,0,1,0-.36l1.54-1.54A.75.75,0,0,0,12.72.22L11.18,1.76a.25.25,0,0,1-.36,0L9.28.22A.75.75,0,0,0,8.22,1.28L9.76,2.82a.25.25,0,0,1,0,.36L8.22,4.72a.75.75,0,0,0,0,1.06.75.75,0,0,0,1.06,0l1.54-1.54a.25.25,0,0,1,.36,0l1.54,1.54a.75.75,0,0,0,1.06,0,.75.75,0,0,0,0-1.06Z"
            />
            <path
                d="M11.18,6.35a.25.25,0,0,0-.35,0l-.49.48A2.25,2.25,0,0,1,6.5,5.25a2.21,2.21,0,0,1,.66-1.59l.48-.49a.25.25,0,0,0,0-.35c-.21-.21-.55-.56-.7-.74A.27.27,0,0,0,6.76,2H2.25A1.25,1.25,0,0,0,1,3.25v7.11a.29.29,0,0,1,0,.09L.05,13a.74.74,0,0,0,.89,1l3.6-1h6.21A1.25,1.25,0,0,0,12,11.75V7.24a.27.27,0,0,0-.08-.19C11.74,6.9,11.39,6.56,11.18,6.35Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MailChatBubbleSquareDelete',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
