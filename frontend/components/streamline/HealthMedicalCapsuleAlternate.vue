<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.64,1.36a4.64,4.64,0,0,0-6.56,0L1.36,6.08a4.64,4.64,0,0,0,0,6.56,4.64,4.64,0,0,0,6.56,0l4.72-4.72A4.64,4.64,0,0,0,12.64,1.36ZM6.86,11.58A3.14,3.14,0,0,1,2.42,7.14L4.31,5.25a.25.25,0,0,1,.36,0L8.75,9.33a.25.25,0,0,1,0,.36Zm4.72-4.72L10.17,8.27a.24.24,0,0,1-.35,0L5.73,4.18a.24.24,0,0,1,0-.35L7.14,2.42a3.14,3.14,0,0,1,4.44,4.44Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'HealthMedicalCapsuleAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
