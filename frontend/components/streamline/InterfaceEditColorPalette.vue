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
                d="M7,5.26A4.49,4.49,0,0,1,11.5,5a4.5,4.5,0,0,0-9,0A4.49,4.49,0,0,1,7,5.26Z"
            />
            <path
                d="M11.5,5V5A4.49,4.49,0,0,1,9,9V9A4.49,4.49,0,0,0,7,5.26,4.49,4.49,0,0,0,5,9V9A4.49,4.49,0,0,1,2.5,5V5A4.5,4.5,0,1,0,7,12.74,4.48,4.48,0,0,1,5,9,4.49,4.49,0,0,0,9,9a4.48,4.48,0,0,1-2,3.71A4.5,4.5,0,1,0,11.5,5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditColorPalette',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
