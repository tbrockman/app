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
            <path d="M8,4.5h5a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Z" />
            <path
                d="M10.5,10a1,1,0,0,1-1-1V6.25A.25.25,0,0,0,9.25,6H8A2.5,2.5,0,0,1,5.5,3.5a2.47,2.47,0,0,1,.56-1.57.27.27,0,0,0,0-.26.27.27,0,0,0-.21-.15l-.39,0a4,4,0,0,0-4,4V9a1,1,0,0,1-1,1,.5.5,0,0,0,0,1h10a.5.5,0,0,0,0-1Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAlertAlarmBellDelete',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
