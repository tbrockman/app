<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="5.5" cy="5" r="1.5" />
            <path
                d="M13.25,4h-1a.75.75,0,0,0,0,1.5.25.25,0,0,1,.25.25v4A1.25,1.25,0,0,1,11.25,11h-.5a.25.25,0,0,1-.25-.25V10a.5.5,0,0,0-.5-.5H8.55a.26.26,0,0,1-.24-.17.25.25,0,0,1,.1-.28,5,5,0,1,0-5.82,0,.25.25,0,0,1,.1.28.26.26,0,0,1-.24.17H1a.5.5,0,0,0-.5.5v3.5A.5.5,0,0,0,1,14h9a.5.5,0,0,0,.5-.5v-.75a.25.25,0,0,1,.25-.25h.5A2.75,2.75,0,0,0,14,9.75v-5A.76.76,0,0,0,13.25,4ZM2,5A3.5,3.5,0,1,1,5.5,8.5,3.5,3.5,0,0,1,2,5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderFireAlarm',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
