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
                d="M14,11.25A2.75,2.75,0,0,1,11.25,14H2.75A2.75,2.75,0,0,1,0,11.25V2.75A2.75,2.75,0,0,1,2.75,0h8.5A2.75,2.75,0,0,1,14,2.75ZM2.75,1.5A1.25,1.25,0,0,0,1.5,2.75v8.5A1.25,1.25,0,0,0,2.75,12.5h8.5a1.25,1.25,0,0,0,1.25-1.25V2.75A1.25,1.25,0,0,0,11.25,1.5Z"
            />
            <path
                d="M5.5,11a.76.76,0,0,1-.75-.75V3.75A.76.76,0,0,1,5.5,3h2a2.75,2.75,0,0,1,0,5.5h-1a.25.25,0,0,0-.25.25v1.5A.76.76,0,0,1,5.5,11Zm.75-4.25A.25.25,0,0,0,6.5,7h1a1.25,1.25,0,0,0,0-2.5h-1a.25.25,0,0,0-.25.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelHotelParkingSignAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
