<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M8.25,3.13a.26.26,0,0,1-.2-.2L7.86,2A.27.27,0,0,1,8,1.72l.5-.37A.75.75,0,0,0,8,0H6a.75.75,0,0,0-.45,1.35l.5.37A.27.27,0,0,1,6.14,2L6,2.93a.26.26,0,0,1-.2.2A6,6,0,0,0,1,9v3.5A1.5,1.5,0,0,0,2.5,14h9A1.5,1.5,0,0,0,13,12.5V9A6,6,0,0,0,8.25,3.13ZM9,6A1,1,0,1,1,8,7,1,1,0,0,1,9,6ZM5,6A1,1,0,1,1,4,7,1,1,0,0,1,5,6Zm6,5.5a.5.5,0,0,1-.5.5h-7a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h7a.5.5,0,0,1,.5.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerRobot',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
