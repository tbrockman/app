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
                d="M8,13.52a1.2,1.2,0,0,1-1.92,0c-.72-.95-4.29-5.81-4.29-8.31a5.25,5.25,0,0,1,10.5,0C12.25,7.71,8.68,12.57,8,13.52ZM7,1.5A3.74,3.74,0,0,0,3.25,5.21C3.25,6.73,5.37,10,6.8,12a.25.25,0,0,0,.4,0c1.43-2,3.55-5.29,3.55-6.81A3.74,3.74,0,0,0,7,1.5Z"
            />
            <circle cx="7" cy="5" r="1.5" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelMapLocationPinAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
