<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13,0H1A1,1,0,0,0,0,1V13a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V1A1,1,0,0,0,13,0ZM2.72,4.72l2-2A.75.75,0,0,1,6,3.25v4.5a.75.75,0,0,1-1.5,0V5.66a.25.25,0,0,0-.15-.23.26.26,0,0,0-.28.06l-.29.29A.75.75,0,0,1,2.72,4.72Zm7.53,6.78H3.75a.75.75,0,0,1,0-1.5h6.5a.75.75,0,0,1,0,1.5Zm1-5.72a.75.75,0,0,1-1.06,0l-.29-.29a.26.26,0,0,0-.28-.06.25.25,0,0,0-.15.23V7.75a.75.75,0,0,1-1.5,0V3.25a.75.75,0,0,1,1.28-.53l2,2A.75.75,0,0,1,11.28,5.78Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ShippingBoxSign',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
