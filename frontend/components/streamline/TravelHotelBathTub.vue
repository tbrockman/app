<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,5.5a1.76,1.76,0,0,0-1.75-1.75h-1.5a.25.25,0,0,1-.25-.25V3.25a.5.5,0,0,0-.5-.5H6a.5.5,0,0,0-.5.5V3.5a.25.25,0,0,1-.25.25H1.75A1.76,1.76,0,0,0,0,5.5v1a4.75,4.75,0,0,0,4.75,4.75h4.5A4.75,4.75,0,0,0,14,6.5Zm-1.5,1A3.26,3.26,0,0,1,9.25,9.75H4.75A3.26,3.26,0,0,1,1.5,6.5v-1a.25.25,0,0,1,.25-.25h3.5a.25.25,0,0,1,.25.25V7.25a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V5.5a.25.25,0,0,1,.25-.25h1.5a.25.25,0,0,1,.25.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelHotelBathTub',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
