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
                d="M7.5,10.76H7.38a.74.74,0,0,1-.6-.54L5.9,7a.27.27,0,0,0-.21-.19.27.27,0,0,0-.25.12l-.3.5a.75.75,0,0,1-.64.36h-1a.75.75,0,0,1,0-1.5h.43a.25.25,0,0,0,.22-.12l1.21-2a.75.75,0,0,1,1.36.19L7.65,7.7a.25.25,0,0,0,.2.18.28.28,0,0,0,.25-.11l.78-1.16a.75.75,0,0,1,.62-.34h1a.75.75,0,0,1,0,1.5H10a.26.26,0,0,0-.2.11L8.12,10.43A.74.74,0,0,1,7.5,10.76Z"
            />
            <path
                d="M7,14a7,7,0,1,1,7-7A7,7,0,0,1,7,14ZM7,1.5A5.5,5.5,0,1,0,12.5,7,5.51,5.51,0,0,0,7,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceSignalGraphCircleAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
