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
                d="M14,5.5a1.25,1.25,0,0,0-1.25-1.25H8.25a.75.75,0,0,0,0,1.5h4A.25.25,0,0,1,12.5,6V8a.25.25,0,0,1-.25.25h-4a.75.75,0,0,0,0,1.5h4.5A1.25,1.25,0,0,0,14,8.5Z"
            />
            <path
                d="M2.25,8.25h-.5A.25.25,0,0,1,1.5,8V6a.25.25,0,0,1,.25-.25h.5a.75.75,0,0,0,0-1.5h-1A1.25,1.25,0,0,0,0,5.5v3A1.25,1.25,0,0,0,1.25,9.75h1a.75.75,0,0,0,0-1.5Z"
            />
            <path
                d="M6.75,10.75h-.5A.25.25,0,0,1,6,10.5v-7a.25.25,0,0,1,.25-.25h.5a.75.75,0,0,0,0-1.5h-3a.75.75,0,0,0,0,1.5h.5a.25.25,0,0,1,.25.25v7a.25.25,0,0,1-.25.25h-.5a.75.75,0,0,0,0,1.5h3a.75.75,0,0,0,0-1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingTypeCursor',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
