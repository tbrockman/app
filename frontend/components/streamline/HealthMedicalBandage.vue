<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.8,7,7,1.2A4.09,4.09,0,0,0,1.2,7L7,12.8A4.09,4.09,0,1,0,12.8,7ZM2.26,2.26a2.6,2.6,0,0,1,3.67,0l1,1A.22.22,0,0,1,7,3.41a.24.24,0,0,1-.07.18L3.59,6.91a.24.24,0,0,1-.35,0l-1-1A2.6,2.6,0,0,1,2.26,2.26Zm9.48,9.48a2.66,2.66,0,0,1-3.67,0l-1-1A.22.22,0,0,1,7,10.59a.24.24,0,0,1,.07-.18l3.32-3.32a.24.24,0,0,1,.35,0l1,1A2.6,2.6,0,0,1,11.74,11.74Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'HealthMedicalBandage',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
