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
                d="M5.25,1.75H.75A.76.76,0,0,1,0,1,.76.76,0,0,1,.75.25h4.5A.76.76,0,0,1,6,1,.76.76,0,0,1,5.25,1.75Z"
            />
            <path
                d="M.75,4.25h4.5a.75.75,0,0,1,0,1.5H.75a.75.75,0,0,1,0-1.5Z"
            />
            <path
                d="M.75,12.25h12.5a.75.75,0,0,1,0,1.5H.75a.75.75,0,0,1,0-1.5Z"
            />
            <path
                d="M.75,8.25h12.5a.75.75,0,0,1,0,1.5H.75a.75.75,0,0,1,0-1.5Z"
            />
            <path
                d="M12.25,6.5h-3A1.76,1.76,0,0,1,7.5,4.75v-3A1.76,1.76,0,0,1,9.25,0h3A1.76,1.76,0,0,1,14,1.75v3A1.76,1.76,0,0,1,12.25,6.5Zm-3-5A.25.25,0,0,0,9,1.75v3A.25.25,0,0,0,9.25,5h3a.25.25,0,0,0,.25-.25v-3a.25.25,0,0,0-.25-.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingImageRightAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
