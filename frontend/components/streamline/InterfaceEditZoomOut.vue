<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path d="M8,7.21H4.46a1,1,0,0,1,0-2H8a1,1,0,1,1,0,2Z" />
            <path
                d="M13.75,13.75a1,1,0,0,0,0-1.42L11.42,10a.27.27,0,0,1,0-.32,6.12,6.12,0,0,0,1.07-3.48,6.25,6.25,0,1,0-6.25,6.25,6.12,6.12,0,0,0,3.48-1.07.27.27,0,0,1,.32,0l2.32,2.33A1,1,0,0,0,13,14,1,1,0,0,0,13.75,13.75ZM2,6.21a4.25,4.25,0,1,1,4.25,4.25A4.25,4.25,0,0,1,2,6.21Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditZoomOut',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
