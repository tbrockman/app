<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.28,5.6,8.63,2.28A1.51,1.51,0,0,0,6.25,3.51v1a.24.24,0,0,1-.14.22.25.25,0,0,1-.26,0L2.38,2.28A1.51,1.51,0,0,0,0,3.51v7a1.51,1.51,0,0,0,2.38,1.23L5.85,9.24a.25.25,0,0,1,.26,0,.24.24,0,0,1,.14.22v1.05a1.51,1.51,0,0,0,2.38,1.23L13.28,8.4a1.72,1.72,0,0,0,0-2.8Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentControlButtonFastForward1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
