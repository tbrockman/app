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
                d="M8.84,12a.16.16,0,0,1,.11.05.14.14,0,0,1,0,.12,2,2,0,0,1-4,.12.23.23,0,0,1,.06-.2A.25.25,0,0,1,5.27,12Z"
            />
            <path
                d="M14,10a.5.5,0,0,0-.5-.5c-.59,0-1.71-1-1.71-4.71a4.79,4.79,0,1,0-9.58,0C2.21,8.51,1.09,9.5.5,9.5a.5.5,0,0,0,0,1h13A.5.5,0,0,0,14,10Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAlertAlarmBell2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
