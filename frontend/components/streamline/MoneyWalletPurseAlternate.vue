<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path
                d="M7,5a6.93,6.93,0,0,0-7,6.84A2.18,2.18,0,0,0,2.19,14h9.62A2.18,2.18,0,0,0,14,11.83,6.93,6.93,0,0,0,7,5Zm4.81,7.5H2.19a.67.67,0,0,1-.69-.66A5.43,5.43,0,0,1,7,6.49a5.43,5.43,0,0,1,5.5,5.34A.67.67,0,0,1,11.81,12.49Z"
            />
            <path
                d="M1.53,5.77a7.76,7.76,0,0,1,10.94,0,.75.75,0,0,0,1.06,0,.75.75,0,0,0,0-1.06A9.26,9.26,0,0,0,9.59,2.39a.23.23,0,0,1-.16-.14.24.24,0,0,1,0-.22A2.71,2.71,0,0,0,9.75.76a.75.75,0,1,0-1.5,0,1.25,1.25,0,0,1-2.5,0,.75.75,0,1,0-1.5,0A2.71,2.71,0,0,0,4.56,2a.24.24,0,0,1,0,.22.23.23,0,0,1-.16.14A9.26,9.26,0,0,0,.47,4.71a.75.75,0,0,0,0,1.06A.74.74,0,0,0,1.53,5.77Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MoneyWalletPurseAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
