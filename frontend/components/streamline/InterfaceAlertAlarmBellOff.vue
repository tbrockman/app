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
                d="M7.75,14H6.25a.75.75,0,0,1,0-1.5h1.5a.75.75,0,0,1,0,1.5Z"
            />
            <path
                d="M9.22,2a.23.23,0,0,0,.07-.21.23.23,0,0,0-.13-.18A4.4,4.4,0,0,0,7,1,4.51,4.51,0,0,0,2.5,5.5V8.07a.25.25,0,0,0,.15.23.26.26,0,0,0,.28-.05Z"
            />
            <path
                d="M13.78.22a.75.75,0,0,0-1.06,0L.22,12.72a.75.75,0,0,0,1.06,1.06L4,11.07A.26.26,0,0,1,4.16,11H12.5a.5.5,0,0,0,0-1,1,1,0,0,1-1-1V5.5A4.61,4.61,0,0,0,11.25,4a.25.25,0,0,1,.06-.26l2.47-2.47A.75.75,0,0,0,13.78.22Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAlertAlarmBellOff',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
