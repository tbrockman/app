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
                d="M14,12.25A1.76,1.76,0,0,1,12.25,14h-8a.75.75,0,0,1,0-1.5h8a.25.25,0,0,0,.25-.25v-8a.75.75,0,0,1,1.5,0Z"
            />
            <path
                d="M10.5,1.5A1.5,1.5,0,0,0,9,0H1.5A1.5,1.5,0,0,0,0,1.5V9a1.5,1.5,0,0,0,1.5,1.5H9A1.5,1.5,0,0,0,10.5,9ZM8.25,5.25A.76.76,0,0,1,7.5,6H6.25A.25.25,0,0,0,6,6.25V7.5a.75.75,0,0,1-1.5,0V6.25A.25.25,0,0,0,4.25,6H3A.75.75,0,0,1,3,4.5H4.25a.25.25,0,0,0,.25-.25V3A.75.75,0,0,1,6,3V4.25a.25.25,0,0,0,.25.25H7.5A.76.76,0,0,1,8.25,5.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditLayerAdd1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
