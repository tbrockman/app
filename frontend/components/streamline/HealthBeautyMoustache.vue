<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.76,6.08a.48.48,0,0,0-.48,0,4.83,4.83,0,0,1-1.77.44h0a2.34,2.34,0,0,1-.32-.79A2.69,2.69,0,0,0,9.66,3.63a2.58,2.58,0,0,0-2.5.5.24.24,0,0,1-.32,0,2.57,2.57,0,0,0-2.5-.5A2.69,2.69,0,0,0,2.83,5.71a4.14,4.14,0,0,1-.23.65.24.24,0,0,1-.23.14A5,5,0,0,1,.72,6.06a.48.48,0,0,0-.48,0A.49.49,0,0,0,0,6.5,4,4,0,0,0,6.82,9.34a.27.27,0,0,1,.36,0A4,4,0,0,0,14,6.5.49.49,0,0,0,13.76,6.08Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'HealthBeautyMoustache',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
