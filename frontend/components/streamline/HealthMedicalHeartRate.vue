<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.84,3.94A4,4,0,0,0,11,1.13,4.18,4.18,0,0,0,7.17,2.41a.25.25,0,0,1-.34,0A4.18,4.18,0,0,0,3,1.13,4,4,0,0,0,.16,3.94,3.84,3.84,0,0,0,.13,6a.25.25,0,0,0,.24.19h2L3.62,4.28a.76.76,0,0,1,1.3.08L6.15,6.82A.26.26,0,0,0,6.36,7a.25.25,0,0,0,.22-.11L7.12,6a.76.76,0,0,1,.63-.33h2a.75.75,0,0,1,0,1.5H8.28a.26.26,0,0,0-.21.11l-1.2,1.8a.75.75,0,0,1-.62.34h0A.75.75,0,0,1,5.58,9L4.35,6.58a.24.24,0,0,0-.21-.14.22.22,0,0,0-.22.11l-.55.81a.75.75,0,0,1-.62.34h-1a.23.23,0,0,0-.23.16.23.23,0,0,0,.06.27l5.11,4.69a.51.51,0,0,0,.68,0l5.53-5.06A3.83,3.83,0,0,0,13.84,3.94Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'HealthMedicalHeartRate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
