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
                d="M7.61,5.52a.75.75,0,1,0,1.5,0V.77A.76.76,0,0,0,8.3,0H3.61a.75.75,0,0,0-.75.75.74.74,0,0,0,.75.75H5.94A.26.26,0,0,1,6.12,2L.86,7.2A.75.75,0,1,0,1.92,8.26L7.18,3A.27.27,0,0,1,7.45,3a.25.25,0,0,1,.16.24Z"
            />
            <path
                d="M6.39,8.48a.75.75,0,0,0-1.5,0v4.75A.76.76,0,0,0,5.7,14h4.69a.75.75,0,0,0,0-1.5H8.06a.26.26,0,0,1-.18-.43L13.14,6.8a.75.75,0,0,0-1.06-1.06L6.82,11a.27.27,0,0,1-.27.06.25.25,0,0,1-.16-.24Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsDiagonal',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
