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
                d="M7,14a7,7,0,1,1,7-7A7,7,0,0,1,7,14ZM7,1.5A5.5,5.5,0,1,0,12.5,7,5.51,5.51,0,0,0,7,1.5Z"
            />
            <path
                d="M9.5,5H9.15a.25.25,0,0,1-.24-.18l-.3-1a.5.5,0,0,0-.48-.35H5.87a.5.5,0,0,0-.48.35l-.3,1A.25.25,0,0,1,4.85,5H4.5A1.5,1.5,0,0,0,3,6.5v2A1.5,1.5,0,0,0,4.5,10h5A1.5,1.5,0,0,0,11,8.5v-2A1.5,1.5,0,0,0,9.5,5ZM7,8.5A1.25,1.25,0,1,1,8.25,7.25,1.25,1.25,0,0,1,7,8.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ImageCameraCircleAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
