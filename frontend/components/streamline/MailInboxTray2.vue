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
                d="M3.72,4A.75.75,0,0,0,4.78,4l1-1a.26.26,0,0,1,.28-.06.25.25,0,0,1,.15.23V7.25a.75.75,0,0,0,1.5,0V3.16a.25.25,0,0,1,.15-.23A.26.26,0,0,1,8.18,3l1,1a.75.75,0,0,0,1.06,0,.75.75,0,0,0,0-1.06L7.53.22a.75.75,0,0,0-1.06,0L3.72,3A.75.75,0,0,0,3.72,4Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MailInboxTray2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
