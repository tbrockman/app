<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0Zm3,10.78a.75.75,0,0,1-1.06,0L7.18,9a.25.25,0,0,0-.36,0L5,10.78A.75.75,0,0,1,4,9.72L5.76,7.93a1.74,1.74,0,0,1,2.48,0L10,9.72A.75.75,0,0,1,10,10.78Zm0-6.5L8.24,6.07a1.76,1.76,0,0,1-2.48,0L4,4.28A.75.75,0,1,1,5,3.22L6.82,5a.25.25,0,0,0,.36,0L9,3.22A.75.75,0,1,1,10,4.28Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MoneyCurrencyXrpCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
