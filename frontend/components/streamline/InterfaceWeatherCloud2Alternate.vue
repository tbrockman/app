<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10.69,5.56a2.36,2.36,0,0,0-.38,0A.26.26,0,0,1,10,5.41,5.15,5.15,0,0,0,5.15,2,5.08,5.08,0,0,0,0,7a5.08,5.08,0,0,0,5.15,5h5.54A3.27,3.27,0,0,0,14,8.78,3.26,3.26,0,0,0,10.69,5.56Zm0,4.44H5.15A3.08,3.08,0,0,1,2,7,3.08,3.08,0,0,1,5.15,4,3.09,3.09,0,0,1,8.31,7V7a1,1,0,0,0,.54.89A1,1,0,0,0,9.9,7.82a1.32,1.32,0,0,1,.79-.26A1.27,1.27,0,0,1,12,8.78,1.27,1.27,0,0,1,10.69,10Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceWeatherCloud2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
