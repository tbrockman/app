<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.25,2H.75A.76.76,0,0,0,0,2.75v8.5A.76.76,0,0,0,.75,12h12.5a.76.76,0,0,0,.75-.75V2.75A.76.76,0,0,0,13.25,2ZM7.5,4.75a.75.75,0,0,1,1.5,0v2a.75.75,0,0,1-1.5,0ZM3,9.75a.75.75,0,0,1-1.5,0v-5a.75.75,0,0,1,1.5,0Zm1.25-3v-2a.75.75,0,0,1,1.5,0v2a.75.75,0,0,1-1.5,0Zm4.5,3.75H5.25a.75.75,0,0,1,0-1.5h3.5a.75.75,0,0,1,0,1.5Zm3.75-.75a.75.75,0,0,1-1.5,0v-5a.75.75,0,0,1,1.5,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MoneyCashierBarCode',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
