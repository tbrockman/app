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
                d="M6.25,12.5H4.75a.75.75,0,0,0,0,1.5h1.5a.75.75,0,0,0,0-1.5Z"
            />
            <path
                d="M10.5,10l-.22,0-.53,0A5.76,5.76,0,0,1,4.42,2.08a.25.25,0,0,0,0-.27.25.25,0,0,0-.26-.06A4,4,0,0,0,1.5,5.5V9a1,1,0,0,1-1,1,.5.5,0,0,0,0,1h10a.5.5,0,0,0,0-1Z"
            />
            <path
                d="M9.75,8.5A4.25,4.25,0,1,1,14,4.25,4.26,4.26,0,0,1,9.75,8.5Zm0-7A2.75,2.75,0,1,0,12.5,4.25,2.75,2.75,0,0,0,9.75,1.5Z"
            />
            <path
                d="M9.75,5a.74.74,0,0,1-.53-.22.75.75,0,0,1,0-1.06L10,3A.75.75,0,1,1,11,4l-.75.75A.74.74,0,0,1,9.75,5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAlertAlarmBellSetTime',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
