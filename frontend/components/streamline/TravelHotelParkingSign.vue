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
                d="M8.75,5.5A1.25,1.25,0,0,0,7.5,4.25h-1a.25.25,0,0,0-.25.25v2a.25.25,0,0,0,.25.25h1A1.25,1.25,0,0,0,8.75,5.5Z"
            />
            <path
                d="M14,3.5A3.5,3.5,0,0,0,10.5,0h-7A3.5,3.5,0,0,0,0,3.5v7A3.5,3.5,0,0,0,3.5,14h7A3.5,3.5,0,0,0,14,10.5Zm-3.75,2A2.75,2.75,0,0,1,7.5,8.25h-1a.25.25,0,0,0-.25.25v2a.75.75,0,0,1-1.5,0v-7a.76.76,0,0,1,.75-.75h2A2.75,2.75,0,0,1,10.25,5.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelHotelParkingSign',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
