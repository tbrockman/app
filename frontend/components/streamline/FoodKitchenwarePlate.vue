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
                d="M7,14a7,7,0,1,1,7-7A7,7,0,0,1,7,14ZM7,1.5A5.5,5.5,0,1,0,12.5,7,5.51,5.51,0,0,0,7,1.5Z"
            />
            <path
                d="M7,10.5A3.5,3.5,0,1,1,10.5,7,3.5,3.5,0,0,1,7,10.5ZM7,5A2,2,0,1,0,9,7,2,2,0,0,0,7,5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodKitchenwarePlate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
