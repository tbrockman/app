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
                d="M14,10.75a1.76,1.76,0,0,1-1.75,1.75H1.75A1.76,1.76,0,0,1,0,10.75V3.25A1.76,1.76,0,0,1,1.75,1.5h10.5A1.76,1.76,0,0,1,14,3.25ZM1.75,3a.25.25,0,0,0-.25.25v7.5a.25.25,0,0,0,.25.25h10.5a.25.25,0,0,0,.25-.25V3.25A.25.25,0,0,0,12.25,3Z"
            />
            <path
                d="M11.25,9a.76.76,0,0,1-.75.75H8.25a.75.75,0,0,1,0-1.5H9.5A.25.25,0,0,0,9.75,8V6.75a.75.75,0,0,1,1.5,0Z"
            />
            <path
                d="M3.5,8a.76.76,0,0,1-.75-.75V5a.76.76,0,0,1,.75-.75H5.75a.75.75,0,0,1,0,1.5H4.5A.25.25,0,0,0,4.25,6V7.25A.76.76,0,0,1,3.5,8Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ImagePhotoFocusFrameAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
