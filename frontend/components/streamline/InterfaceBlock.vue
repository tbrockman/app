<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM2,7A5,5,0,0,1,9.48,2.66a.25.25,0,0,1,.12.18.23.23,0,0,1-.07.21L3.05,9.53a.23.23,0,0,1-.21.07.25.25,0,0,1-.18-.12A5,5,0,0,1,2,7ZM12,7a5,5,0,0,1-7.48,4.34.25.25,0,0,1-.12-.18A.23.23,0,0,1,4.47,11L11,4.47a.23.23,0,0,1,.21-.07.25.25,0,0,1,.18.12A5,5,0,0,1,12,7Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceBlock',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
