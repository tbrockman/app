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
                d="M5.5,4.5h3a.49.49,0,0,0,.4-.2A.53.53,0,0,0,9,3.86L8,.36A.5.5,0,0,0,7.5,0h-1A.5.5,0,0,0,6,.36L5,3.86a.53.53,0,0,0,.08.44A.49.49,0,0,0,5.5,4.5Z"
            />
            <path
                d="M9,6H5A3,3,0,0,0,2,9v3.5A1.5,1.5,0,0,0,3.5,14h7A1.5,1.5,0,0,0,12,12.5V9A3,3,0,0,0,9,6Zm0,6H5a1,1,0,0,1,0-2H9a1,1,0,0,1,0,2Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditGlue',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
