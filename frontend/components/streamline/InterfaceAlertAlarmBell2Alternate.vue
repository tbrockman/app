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
                d="M14,9.8A1.2,1.2,0,0,1,12.8,11H1.2a1.2,1.2,0,0,1-.1-2.39.25.25,0,0,0,.18-.1C1.5,8.22,2,7.26,2,5A5,5,0,0,1,12,5c0,2.32.52,3.26.77,3.53a.26.26,0,0,0,.17.07A1.19,1.19,0,0,1,14,9.8ZM2.65,9.12a.25.25,0,0,0,0,.25.26.26,0,0,0,.22.13h8.28a.26.26,0,0,0,.22-.13.25.25,0,0,0,0-.25A8,8,0,0,1,10.52,5a3.52,3.52,0,0,0-7,0A8,8,0,0,1,2.65,9.12Z"
            />
            <path
                d="M8.25,14H5.75a.75.75,0,0,1,0-1.5h2.5a.75.75,0,0,1,0,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAlertAlarmBell2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
