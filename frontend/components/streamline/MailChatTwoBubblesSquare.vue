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
                d="M14,13.27,13,11.56a.27.27,0,0,1,0-.12V6.5a1,1,0,0,0-1-1H6a1,1,0,0,0-1,1V12a1,1,0,0,0,1,1h4.72l.09,0,2.52,1A.54.54,0,0,0,14,13.27Z"
            />
            <path
                d="M11.75,4A.25.25,0,0,0,12,3.75V1.25A1.25,1.25,0,0,0,10.75,0H2.25A1.25,1.25,0,0,0,1,1.25V7.36a.29.29,0,0,1,0,.09L.05,10a.74.74,0,0,0,.89,1l2.37-.63a.26.26,0,0,0,.19-.24V6.5A2.5,2.5,0,0,1,6,4Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MailChatTwoBubblesSquare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
