<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,6.25A1.76,1.76,0,0,0,12.25,4.5H11a.24.24,0,0,1-.21-.11L8.4.75a1.68,1.68,0,0,0-2.8,0L3.17,4.39A.24.24,0,0,1,3,4.5H1.75A1.76,1.76,0,0,0,0,6.25v6A1.76,1.76,0,0,0,1.75,14h10.5A1.76,1.76,0,0,0,14,12.25ZM6.85,1.58a.19.19,0,0,1,.3,0L8.84,4.11a.24.24,0,0,1,0,.26.25.25,0,0,1-.22.13H5.37a.25.25,0,0,1-.22-.13.24.24,0,0,1,0-.26ZM12.5,12.25a.25.25,0,0,1-.25.25H1.75a.25.25,0,0,1-.25-.25v-6A.25.25,0,0,1,1.75,6h10.5a.25.25,0,0,1,.25.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ShoppingStoreSignage1Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
