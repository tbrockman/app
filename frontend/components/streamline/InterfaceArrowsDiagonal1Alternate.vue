<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M6.21,12.29,4.84,10.93a.25.25,0,0,1,0-.36l5.73-5.73a.25.25,0,0,1,.36,0l1.36,1.37A1,1,0,0,0,14,5.5V1a1,1,0,0,0-1-1H8.5a1,1,0,0,0-.71,1.71L9.16,3.07a.25.25,0,0,1,0,.36L3.43,9.16a.25.25,0,0,1-.36,0L1.71,7.79A1,1,0,0,0,0,8.5V13a1,1,0,0,0,1,1H5.5a1,1,0,0,0,.71-1.71Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsDiagonal1Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
