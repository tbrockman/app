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
                d="M14,9.5a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1,2,2,0,0,1-4,0,1,1,0,0,0-1-1H1a1,1,0,0,0-1,1V13a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1Z"
            />
            <path
                d="M6.47,7.78a.75.75,0,0,0,1.06,0L10.28,5A.75.75,0,1,0,9.22,4l-1,1a.26.26,0,0,1-.28.06.25.25,0,0,1-.15-.23V.75a.75.75,0,0,0-1.5,0V4.84a.25.25,0,0,1-.15.23A.26.26,0,0,1,5.82,5l-1-1A.75.75,0,1,0,3.72,5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MailInboxTray1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
