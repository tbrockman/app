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
                d="M.26,3.32A.76.76,0,0,1,.18,2.26,9.48,9.48,0,0,1,2.9.09a.74.74,0,0,1,1,.31.74.74,0,0,1-.31,1A8,8,0,0,0,1.32,3.24.76.76,0,0,1,.26,3.32Z"
            />
            <path
                d="M12.68,3.24A8,8,0,0,0,10.4,1.41a.74.74,0,0,1-.31-1,.74.74,0,0,1,1-.31,9.48,9.48,0,0,1,2.72,2.17.75.75,0,1,1-1.14,1Z"
            />
            <path
                d="M7,2a6,6,0,1,0,6,6A6,6,0,0,0,7,2ZM9,8.75H7A.76.76,0,0,1,6.25,8V5.5a.75.75,0,0,1,1.5,0V7A.25.25,0,0,0,8,7.25H9a.75.75,0,0,1,0,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTimeTimerAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
