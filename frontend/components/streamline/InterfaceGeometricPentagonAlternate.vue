<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M9.79,14H4.21a1.49,1.49,0,0,1-1.36-.87h0l-2.71-6h0a1.52,1.52,0,0,1,.4-1.77h0L6,.38H6a1.51,1.51,0,0,1,2,0H8l5.52,5h0a1.51,1.51,0,0,1,.37,1.74h0l-2.71,6h0A1.5,1.5,0,0,1,9.79,14ZM4.46,11.85a.25.25,0,0,0,.23.15H9.31a.25.25,0,0,0,.23-.15l2.28-5.07a.24.24,0,0,0-.06-.29L7.17,2.33a.25.25,0,0,0-.34,0L2.24,6.49a.26.26,0,0,0-.06.29Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceGeometricPentagonAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
