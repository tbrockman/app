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
                d="M9.25,9.87A.51.51,0,0,0,9,9.45L7.28,8.29a.48.48,0,0,0-.56,0L5,9.45a.51.51,0,0,0-.22.42v2.46a.5.5,0,0,0,.22.42l1.75,1.17a.52.52,0,0,0,.56,0L9,12.75a.5.5,0,0,0,.22-.42Z"
            />
            <path
                d="M7,0A5.74,5.74,0,0,0,2.85,9.72a.25.25,0,0,0,.26.07.27.27,0,0,0,.17-.21,1.82,1.82,0,0,1,.37-.91.26.26,0,0,0,0-.31,4.25,4.25,0,1,1,6.7,0,.26.26,0,0,0,0,.31,1.82,1.82,0,0,1,.37.92.25.25,0,0,0,.17.2.25.25,0,0,0,.26-.06A5.75,5.75,0,0,0,7,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ShoppingJewelryNecklace',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
