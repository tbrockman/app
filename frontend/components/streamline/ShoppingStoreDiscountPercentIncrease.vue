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
                d="M3,6A3,3,0,1,0,0,3,3,3,0,0,0,3,6ZM3,1.5A1.5,1.5,0,1,1,1.5,3,1.5,1.5,0,0,1,3,1.5Z"
            />
            <path
                d="M11,8a3,3,0,1,0,3,3A3,3,0,0,0,11,8Zm0,4.5A1.5,1.5,0,1,1,12.5,11,1.5,1.5,0,0,1,11,12.5Z"
            />
            <path
                d="M13.94.46a.71.71,0,0,0-.4-.4C13.34,0,13.7,0,8.25,0A.76.76,0,0,0,7.5.75a.76.76,0,0,0,.75.75h2.59a.25.25,0,0,1,.23.15.26.26,0,0,1-.06.28L.22,12.72a.75.75,0,0,0,0,1.06.75.75,0,0,0,1.06,0L12.07,3a.26.26,0,0,1,.28-.06.25.25,0,0,1,.15.23V5.75a.75.75,0,0,0,1.5,0C14,.31,14,.66,13.94.46Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ShoppingStoreDiscountPercentIncrease',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
