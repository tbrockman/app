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
                d="M8.75,1.75h4.5A.76.76,0,0,0,14,1a.76.76,0,0,0-.75-.75H8.75A.76.76,0,0,0,8,1,.76.76,0,0,0,8.75,1.75Z"
            />
            <path
                d="M13.25,4.25H8.75a.75.75,0,0,0,0,1.5h4.5a.75.75,0,0,0,0-1.5Z"
            />
            <rect width="6" height="6" rx="1" />
            <path
                d="M13.25,8.25H8.75a.75.75,0,0,0,0,1.5h4.5a.75.75,0,0,0,0-1.5Z"
            />
            <path
                d="M13.25,12.25H8.75a.75.75,0,0,0,0,1.5h4.5a.75.75,0,0,0,0-1.5Z"
            />
            <rect y="8" width="6" height="6" rx="1" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingParagraphBullets',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
