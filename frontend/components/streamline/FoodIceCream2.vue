<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M9.75,0H4.25a1.5,1.5,0,0,0-1.5,1.5v7A1.5,1.5,0,0,0,4.25,10H4.5a.25.25,0,0,1,.25.25v1.5a2.25,2.25,0,0,0,4.5,0v-1.5A.25.25,0,0,1,9.5,10h.25a1.5,1.5,0,0,0,1.5-1.5v-7A1.5,1.5,0,0,0,9.75,0ZM5.5,7.25a.76.76,0,0,1-.75-.75v-3a.75.75,0,0,1,1.5,0v3A.76.76,0,0,1,5.5,7.25Zm2.25,4.5a.75.75,0,0,1-1.5,0v-1.5A.25.25,0,0,1,6.5,10h1a.25.25,0,0,1,.25.25ZM9.25,6.5a.75.75,0,0,1-1.5,0v-3a.75.75,0,0,1,1.5,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'FoodIceCream2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
