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
                d="M5.5,8.76a.75.75,0,0,0-1.28-.54L2,10.47a.75.75,0,0,0,0,1.06l2.25,2.25a.75.75,0,0,0,1.28-.54V12a.25.25,0,0,1,.25-.25h6.5A1.75,1.75,0,0,0,14,10V7.75a.75.75,0,0,0-1.5,0V10a.25.25,0,0,1-.25.25H5.75A.25.25,0,0,1,5.5,10Z"
            />
            <path
                d="M8.5,5.24a.75.75,0,0,0,1.28.54L12,3.53a.75.75,0,0,0,0-1.06L9.78.22A.75.75,0,0,0,8.5.76V2a.25.25,0,0,1-.25.25H1.75A1.75,1.75,0,0,0,0,4V6.25A.76.76,0,0,0,.75,7a.76.76,0,0,0,.75-.75V4a.25.25,0,0,1,.25-.25h6.5A.25.25,0,0,1,8.5,4Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsReload2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
