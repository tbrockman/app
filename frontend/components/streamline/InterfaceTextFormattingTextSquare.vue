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
                d="M14,1.5A1.5,1.5,0,0,0,12.5,0H1.5A1.5,1.5,0,0,0,0,1.5v11A1.5,1.5,0,0,0,1.5,14h11A1.5,1.5,0,0,0,14,12.5Zm-3.2,10a.75.75,0,0,1-1-.39L9.15,9.55a.5.5,0,0,0-.46-.31H5.31a.5.5,0,0,0-.46.31l-.66,1.53a.76.76,0,0,1-1,.39.75.75,0,0,1-.39-1L6,3.16a1.14,1.14,0,0,1,2.1,0l3.14,7.33A.75.75,0,0,1,10.8,11.47Z"
            />
            <path
                d="M5.77,7.4a.24.24,0,0,0,0,.23A.25.25,0,0,0,6,7.74H8a.25.25,0,0,0,.21-.11.24.24,0,0,0,0-.23l-1-2.34a.25.25,0,0,0-.46,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingTextSquare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
