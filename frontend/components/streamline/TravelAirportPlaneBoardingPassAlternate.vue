<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.6,5a.5.5,0,0,0,.4-.49V3.25a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v1.3A.5.5,0,0,0,.4,5,2,2,0,0,1,2,7,2,2,0,0,1,.4,9a.5.5,0,0,0-.4.49v1.3a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V9.45A.5.5,0,0,0,13.6,9,2,2,0,0,1,13.6,5Zm-4.07.43a.75.75,0,0,1,0,1.06l-3,3a.75.75,0,0,1-1.06,0l-1-1A.75.75,0,0,1,5.53,7.47l.29.29a.25.25,0,0,0,.36,0l.33-.33a.25.25,0,0,0,0-.36L6,6.53A.75.75,0,0,1,7,5.47L7.57,6a.25.25,0,0,0,.36,0l.54-.54A.75.75,0,0,1,9.53,5.47Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelAirportPlaneBoardingPassAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
