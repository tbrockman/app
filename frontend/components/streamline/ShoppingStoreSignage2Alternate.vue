<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1.75A1.76,1.76,0,0,0,12.25,0H1.75A1.76,1.76,0,0,0,0,1.75v6A1.76,1.76,0,0,0,1.75,9.5H5.5a.25.25,0,0,1,.25.25v3.5A.76.76,0,0,0,6.5,14h1a.76.76,0,0,0,.75-.75V9.75A.25.25,0,0,1,8.5,9.5h3.75A1.76,1.76,0,0,0,14,7.75Zm-1.5,6a.25.25,0,0,1-.25.25H1.75a.25.25,0,0,1-.25-.25v-6a.25.25,0,0,1,.25-.25h10.5a.25.25,0,0,1,.25.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ShoppingStoreSignage2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
