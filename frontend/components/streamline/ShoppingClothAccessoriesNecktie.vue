<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10.48,10.36,8.56,3.64a.23.23,0,0,1,0-.18L10,.72a.51.51,0,0,0,0-.48A.52.52,0,0,0,9.5,0h-5a.52.52,0,0,0-.43.24.51.51,0,0,0,0,.48L5.42,3.46a.23.23,0,0,1,0,.18L3.52,10.36a.49.49,0,0,0,.13.49l3,3a.48.48,0,0,0,.7,0l3-3A.49.49,0,0,0,10.48,10.36Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ShoppingClothAccessoriesNecktie',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
