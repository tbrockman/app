<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M1.66,13a1.09,1.09,0,0,1-.46.1,1.19,1.19,0,0,1-.89-.4,1.18,1.18,0,0,1-.16-1.37l2.3-4.23a.25.25,0,0,0,0-.24L.15,2.65A1.19,1.19,0,0,1,1.66,1L13.29,5.9a1.21,1.21,0,0,1,0,2.2ZM2.54,3A.23.23,0,0,0,2.26,3a.24.24,0,0,0,0,.29L4,6.53a1,1,0,0,1,0,.93L2.22,10.67a.24.24,0,0,0,0,.29.23.23,0,0,0,.28.06l9-3.79a.25.25,0,0,0,0-.46Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelMapNavigationArrowSouthEastAlternateCompassArrowMapBearingMapsHeadingGpsRight',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
