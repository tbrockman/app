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
                d="M5.5,1.5h-3A.76.76,0,0,1,1.75.75.76.76,0,0,1,2.5,0h3a.76.76,0,0,1,.75.75A.76.76,0,0,1,5.5,1.5Z"
            />
            <path
                d="M5.5,5.67H.75a.75.75,0,0,1,0-1.5H5.5a.75.75,0,0,1,0,1.5Z"
            />
            <path d="M5.5,14H.75a.75.75,0,0,1,0-1.5H5.5a.75.75,0,0,1,0,1.5Z" />
            <path
                d="M5.5,9.83H.75a.75.75,0,0,1,0-1.5H5.5a.75.75,0,0,1,0,1.5Z"
            />
            <path d="M11.5,14h-3a.75.75,0,0,1,0-1.5h3a.75.75,0,0,1,0,1.5Z" />
            <path
                d="M13.25,9.83H8.5a.75.75,0,0,1,0-1.5h4.75a.75.75,0,0,1,0,1.5Z"
            />
            <path
                d="M13.25,1.5H8.5A.76.76,0,0,1,7.75.75.76.76,0,0,1,8.5,0h4.75A.76.76,0,0,1,14,.75.76.76,0,0,1,13.25,1.5Z"
            />
            <path
                d="M13.25,5.67H8.5a.75.75,0,0,1,0-1.5h4.75a.75.75,0,0,1,0,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingParagraphColumn',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
