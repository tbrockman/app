<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,3.5A3.5,3.5,0,0,0,10.5,0h-7A3.5,3.5,0,0,0,0,3.5v7A3.5,3.5,0,0,0,3.5,14h7A3.5,3.5,0,0,0,14,10.5Zm-3.28.41A.76.76,0,0,1,10.84,5l-3.93,5a1.3,1.3,0,0,1-.82.55l-.23,0a1.24,1.24,0,0,1-.78-.28L3.29,8.84a.75.75,0,0,1,.92-1.18L5.62,8.74A.24.24,0,0,0,6,8.7L9.66,4A.76.76,0,0,1,10.72,3.91Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'CheckSquare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
