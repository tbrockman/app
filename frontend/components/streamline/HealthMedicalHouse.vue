<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.87,7.16l-6.5-6a.51.51,0,0,0-.74,0l-6.5,6A.5.5,0,0,0,.5,8H1.75A.25.25,0,0,1,2,8.25V13a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V8.25A.25.25,0,0,1,12.25,8H13.5a.5.5,0,0,0,.37-.84ZM9,10H8a.25.25,0,0,0-.25.25v1a.75.75,0,0,1-1.5,0v-1A.25.25,0,0,0,6,10H5A.75.75,0,0,1,5,8.5H6a.25.25,0,0,0,.25-.25v-1a.75.75,0,0,1,1.5,0v1A.25.25,0,0,0,8,8.5H9A.75.75,0,0,1,9,10Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'HealthMedicalHouse',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
