<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12,0H2A2,2,0,0,0,0,2V12a2,2,0,0,0,2,2H12a2,2,0,0,0,2-2V2A2,2,0,0,0,12,0ZM4.75,3.75a1,1,0,1,1-1,1A1,1,0,0,1,4.75,3.75Zm0,6.25a.74.74,0,0,1-.53-.22.75.75,0,0,1,0-1.06l4.5-4.5A.75.75,0,0,1,9.78,5.28l-4.5,4.5A.74.74,0,0,1,4.75,10Zm4.5.25a1,1,0,1,1,1-1A1,1,0,0,1,9.25,10.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ShoppingStoreDiscountPercentSquare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
