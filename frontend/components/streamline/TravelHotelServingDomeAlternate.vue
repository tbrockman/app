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
                d="M13.25,10.12H.75a.75.75,0,0,0,0,1.5h12.5a.75.75,0,0,0,0-1.5Z"
            />
            <path
                d="M1.57,7.76a.74.74,0,0,0,.74.86h9.38a.74.74,0,0,0,.74-.86A5.46,5.46,0,0,0,8,3.22.25.25,0,0,1,7.75,3V2.37a.75.75,0,0,0-1.5,0V3A.25.25,0,0,1,6,3.22,5.46,5.46,0,0,0,1.57,7.76ZM7,4.62a4,4,0,0,1,3.54,2.14.25.25,0,0,1,0,.24.25.25,0,0,1-.22.12H3.68A.25.25,0,0,1,3.46,7a.25.25,0,0,1,0-.24A4,4,0,0,1,7,4.62Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelHotelServingDomeAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
