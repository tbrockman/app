<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path d="M13.25,12.5h-9a.75.75,0,0,0,0,1.5h9a.75.75,0,0,0,0-1.5Z" />
            <path
                d="M6.56,10.5a1.4,1.4,0,0,0,1-.4L11.6,6h0a1.38,1.38,0,0,0,0-1.94L7.9.4A1.39,1.39,0,0,0,6,.4L.4,6a1.38,1.38,0,0,0,0,1.94L2.61,10.1a1.37,1.37,0,0,0,1,.4Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingEraser',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
