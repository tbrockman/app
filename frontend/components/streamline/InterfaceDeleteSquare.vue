<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10.5,0h-7A3.5,3.5,0,0,0,0,3.5v7A3.5,3.5,0,0,0,3.5,14h7A3.5,3.5,0,0,0,14,10.5v-7A3.5,3.5,0,0,0,10.5,0ZM9.74,9.74a.87.87,0,0,1-1.24,0L7.18,8.41a.27.27,0,0,0-.36,0L5.5,9.74a.9.9,0,0,1-1.24,0A.85.85,0,0,1,4,9.12a.87.87,0,0,1,.26-.62L5.59,7.18a.27.27,0,0,0,0-.36L4.26,5.5A.88.88,0,0,1,5.5,4.26L6.82,5.59a.27.27,0,0,0,.36,0L8.5,4.26A.88.88,0,1,1,9.74,5.5L8.41,6.82a.27.27,0,0,0,0,.36L9.74,8.5a.87.87,0,0,1,.26.62A.85.85,0,0,1,9.74,9.74Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceDeleteSquare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
