<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1.5A1.5,1.5,0,0,0,12.5,0H1.5A1.5,1.5,0,0,0,0,1.5v11A1.5,1.5,0,0,0,1.5,14h11A1.5,1.5,0,0,0,14,12.5ZM12,8.75a.76.76,0,0,1-.75.75h-3a.77.77,0,0,1-.57-.26L5,6.09A.25.25,0,0,0,4.79,6h-2a.75.75,0,0,1,0-1.5h2.5a.77.77,0,0,1,.57.26l2.7,3.15A.25.25,0,0,0,8.71,8h2.54A.76.76,0,0,1,12,8.75ZM11.25,6h-2a.75.75,0,0,1,0-1.5h2a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerKeyboardOption1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
