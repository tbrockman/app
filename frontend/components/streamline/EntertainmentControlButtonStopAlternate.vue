<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.25,14H2.75A2.75,2.75,0,0,1,0,11.25V2.75A2.75,2.75,0,0,1,2.75,0h8.5A2.75,2.75,0,0,1,14,2.75v8.5A2.75,2.75,0,0,1,11.25,14ZM2.75,2A.76.76,0,0,0,2,2.75v8.5a.76.76,0,0,0,.75.75h8.5a.76.76,0,0,0,.75-.75V2.75A.76.76,0,0,0,11.25,2Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentControlButtonStopAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
