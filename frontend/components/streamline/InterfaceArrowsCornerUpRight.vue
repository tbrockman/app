<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,9.49V1a1,1,0,0,0-1-1H4.51a1,1,0,0,0,0,2H10a.25.25,0,0,1,.23.15.26.26,0,0,1-.05.28L.29,12.29a1,1,0,0,0,1.42,1.42l9.86-9.87a.26.26,0,0,1,.28,0A.25.25,0,0,1,12,4V9.49a1,1,0,1,0,2,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsCornerUpRight',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
