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
                d="M10.93,7h0a.55.55,0,0,1-.36,0h0A4.81,4.81,0,0,1,7.5,2.49V.5A.5.5,0,0,1,8,0h5.5a.5.5,0,0,1,.5.5v2A4.81,4.81,0,0,1,10.93,7Z"
            />
            <path
                d="M11.47,8.37a2.06,2.06,0,0,1-1.44,0A6.33,6.33,0,0,1,6,2.49V2.25A.25.25,0,0,0,5.75,2H2.25A1.25,1.25,0,0,0,1,3.25v7.11a.29.29,0,0,1,0,.09L.05,13a.74.74,0,0,0,.89,1l3.6-1h6.21A1.25,1.25,0,0,0,12,11.75V8.52a.22.22,0,0,0-.12-.21.23.23,0,0,0-.24,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MailChatBubbleSquareProtect',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
