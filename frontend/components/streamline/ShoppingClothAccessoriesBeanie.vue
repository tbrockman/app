<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <rect y="10.5" width="14" height="3.5" rx="1" />
            <path
                d="M12.25,9.25A.25.25,0,0,0,12.5,9V7.5A5.5,5.5,0,0,0,8.18,2.13.24.24,0,0,1,8,1.88C8,1.57,8,1,8,1A1,1,0,0,0,6,1s0,.57,0,.88a.24.24,0,0,1-.19.25A5.5,5.5,0,0,0,1.5,7.5V9a.25.25,0,0,0,.25.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ShoppingClothAccessoriesBeanie',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
