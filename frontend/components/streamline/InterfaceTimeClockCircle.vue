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
                d="M7,14a7,7,0,1,1,7-7A7,7,0,0,1,7,14ZM7,2a5,5,0,1,0,5,5A5,5,0,0,0,7,2Z"
            />
            <path
                d="M8.79,9.71a.74.74,0,0,1-.55-.24l-1.79-2A.74.74,0,0,1,6.25,7V4.75a.75.75,0,0,1,1.5,0V6.61a.23.23,0,0,0,.07.17L9.35,8.46a.74.74,0,0,1-.56,1.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTimeClockCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
