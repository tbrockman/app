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
                d="M9.5,2a1,1,0,0,0-1-1h-1a1,1,0,0,0-1,1V4.71a.24.24,0,0,1-.14.22.23.23,0,0,1-.26,0L2.56,2.32A1.59,1.59,0,0,0,0,3.48v7a1.59,1.59,0,0,0,2.56,1.16L6.1,9.09a.23.23,0,0,1,.26,0,.24.24,0,0,1,.14.22V12a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1Z"
            />
            <rect x="11" y="1" width="3" height="12" rx="1" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentControlButtonPlayPause',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
