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
                d="M12.25,0H1.75A1.75,1.75,0,0,0,0,1.75v5A1.76,1.76,0,0,0,1.75,8.5h10.5A1.76,1.76,0,0,0,14,6.75v-5A1.75,1.75,0,0,0,12.25,0Zm-1,6.75A.25.25,0,0,1,11,7H3a.25.25,0,0,1-.25-.25V5.25A.25.25,0,0,1,3,5h8a.25.25,0,0,1,.25.25Z"
            />
            <path
                d="M2.1,14a.77.77,0,0,1-.59-.89L2,10.6a.76.76,0,1,1,1.48.3L3,13.4A.76.76,0,0,1,2.1,14Z"
            />
            <path
                d="M7,14a.76.76,0,0,1-.75-.75v-2.5a.75.75,0,0,1,1.5,0v2.5A.76.76,0,0,1,7,14Z"
            />
            <path
                d="M11,13.4l-.5-2.5A.76.76,0,0,1,12,10.6l.5,2.5a.76.76,0,1,1-1.48.3Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelHotelAirConditioner',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
