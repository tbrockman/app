<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7.37,6.07C6.76,5.83,5.5,5.32,5.5,5c0-.48.83-.5,1-.5h3a1,1,0,0,0,0-2H8.25A.25.25,0,0,1,8,2.25V1A1,1,0,0,0,6,1V2.31a.26.26,0,0,1-.21.25A2.47,2.47,0,0,0,3.5,5c0,1.68,1.73,2.37,3.13,2.93C7.24,8.17,8.5,8.68,8.5,9A.49.49,0,0,1,8,9.49H4.5a1,1,0,0,0,0,2H5.75a.25.25,0,0,1,.25.25V13a1,1,0,0,0,2,0V11.73a.25.25,0,0,1,.23-.25A2.19,2.19,0,0,0,10.5,9C10.5,7.32,8.77,6.63,7.37,6.07Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MoneyCurrencyDollar',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
