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
                d="M11.47,8.37a2.06,2.06,0,0,1-1.44,0A6.33,6.33,0,0,1,6,2.49V2.26a.27.27,0,0,0-.08-.19A.23.23,0,0,0,5.74,2,6,6,0,0,0,.82,11a.25.25,0,0,1,0,.22L0,13.42A.43.43,0,0,0,.51,14l2.91-.53a.26.26,0,0,1,.15,0A5.83,5.83,0,0,0,6,14a6,6,0,0,0,6-5.45.24.24,0,0,0-.1-.22.28.28,0,0,0-.25,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MailChatBubbleOvalProtect',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
