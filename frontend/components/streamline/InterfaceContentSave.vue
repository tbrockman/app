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
                d="M9.75,10.26A.26.26,0,0,0,9.49,10h-5a.26.26,0,0,0-.26.26v3.49A.25.25,0,0,0,4.5,14h5a.25.25,0,0,0,.25-.25Z"
            />
            <path
                d="M14,1.5A1.5,1.5,0,0,0,12.5,0H11.25A.25.25,0,0,0,11,.25V3.5a.5.5,0,0,1-.5.5H5a.5.5,0,0,1-.5-.5V.25A.25.25,0,0,0,4.25,0H3.5a.47.47,0,0,0-.35.15l-3,3A.47.47,0,0,0,0,3.5v9A1.5,1.5,0,0,0,1.5,14h1a.25.25,0,0,0,.25-.25V10.26A1.76,1.76,0,0,1,4.51,8.5h5a1.76,1.76,0,0,1,1.76,1.76v3.49a.25.25,0,0,0,.25.25h1A1.5,1.5,0,0,0,14,12.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceContentSave',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
