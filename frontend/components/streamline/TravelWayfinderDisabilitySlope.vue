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
                d="M5.36,3.79A.24.24,0,0,1,5.5,4V6.25A.76.76,0,0,0,6.25,7H8a.25.25,0,0,1,.25.25v2a.75.75,0,0,0,1.5,0v-2A1.76,1.76,0,0,0,8,5.5H7.25A.25.25,0,0,1,7,5.25V4a.24.24,0,0,1,.14-.22,2,2,0,1,0-1.78,0Z"
            />
            <path
                d="M6.8,9.16a.75.75,0,0,0-1.42-.5A2,2,0,1,1,3.49,6a.75.75,0,0,0,0-1.5A3.5,3.5,0,1,0,6.8,9.16Z"
            />
            <path
                d="M13.77,9.58a.51.51,0,0,0-.48,0l-7.5,3.5A.5.5,0,0,0,6,14h7.5a.5.5,0,0,0,.5-.5V10A.5.5,0,0,0,13.77,9.58Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderDisabilitySlope',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
