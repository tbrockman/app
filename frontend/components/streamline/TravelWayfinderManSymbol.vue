<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1a1,1,0,0,0-1-1H8.5a1,1,0,0,0,0,2H10a.25.25,0,0,1,.23.15.26.26,0,0,1-.05.28L7.9,4.69a.26.26,0,0,1-.31,0A5,5,0,1,0,9.27,6.41a.26.26,0,0,1,0-.31l2.26-2.26a.26.26,0,0,1,.28,0A.25.25,0,0,1,12,4V5.5a1,1,0,0,0,2,0ZM5,12A3,3,0,1,1,8,9,3,3,0,0,1,5,12Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderManSymbol',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
