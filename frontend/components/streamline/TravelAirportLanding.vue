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
                d="M3.79,1.29,5,1.78a.42.42,0,0,1,.26.42L5.11,3.58a.24.24,0,0,0,.19.27l5,1.19A3,3,0,0,1,12.58,9a.81.81,0,0,1-1.07.43L8.41,8.16a.52.52,0,0,0-.47.05L5.63,9.79a.45.45,0,0,1-.42,0L3.83,9.27a.44.44,0,0,1-.12-.75L5.27,7.3a.23.23,0,0,0,.09-.23.23.23,0,0,0-.15-.19L2.44,5.76a.8.8,0,0,1-.48-1L3.27,1.49A.39.39,0,0,1,3.79,1.29Z"
            />
            <path
                d="M13.25,14H.75a.75.75,0,0,1,0-1.5h12.5a.75.75,0,0,1,0,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelAirportLanding',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
