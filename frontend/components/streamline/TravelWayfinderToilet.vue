<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1a1,1,0,0,0-1-1H10A1,1,0,0,0,9,1V4.25a.25.25,0,0,1-.25.25h-7A1.76,1.76,0,0,0,0,6.25V7.5a5.41,5.41,0,0,0,3.11,4.9.26.26,0,0,1,.14.23v.87a.5.5,0,0,0,.5.5H8.17a.5.5,0,0,0,.5-.5V12a.25.25,0,0,1,.09-.2,5.42,5.42,0,0,0,2.07-4,.25.25,0,0,1,.25-.24H13a1,1,0,0,0,1-1ZM1.75,7.5a.25.25,0,0,1-.25-.25v-1A.25.25,0,0,1,1.75,6h7A.25.25,0,0,1,9,6.25v1a.25.25,0,0,1-.25.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderToilet',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
