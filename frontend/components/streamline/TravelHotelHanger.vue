<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.1,9.81,8.38,6.07A1,1,0,0,1,8,5.28V5A1,1,0,0,0,7,4,1,1,0,1,1,8,3a1,1,0,0,0,2,0A3,3,0,1,0,5.59,5.65a.26.26,0,0,1,.13.19.25.25,0,0,1-.09.22L.91,9.81A2.34,2.34,0,0,0,2.34,14h9.32A2.34,2.34,0,0,0,14,11.66,2.37,2.37,0,0,0,13.1,9.81ZM11.66,12H2.34A.34.34,0,0,1,2,11.66a.37.37,0,0,1,.14-.28l4.7-3.73a.27.27,0,0,1,.32,0l4.71,3.74a.35.35,0,0,1,.13.27A.34.34,0,0,1,11.66,12Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelHotelHanger',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
