<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0Zm3,8.75A1.25,1.25,0,0,1,8.75,10H5.25A1.25,1.25,0,0,1,4,8.75V5.25A1.25,1.25,0,0,1,5.25,4h3.5A1.25,1.25,0,0,1,10,5.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentControlButtonStopCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
