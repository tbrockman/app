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
                d="M7,4.75A.25.25,0,0,0,6.75,5V9A.25.25,0,0,0,7,9.25a2.25,2.25,0,0,0,0-4.5Z"
            />
            <path
                d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM7,10.75H5a.75.75,0,0,1,0-1.5A.25.25,0,0,0,5.25,9V5A.25.25,0,0,0,5,4.75a.75.75,0,0,1,0-1.5H7a3.75,3.75,0,0,1,0,7.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MoneyCurrencyDogeCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
