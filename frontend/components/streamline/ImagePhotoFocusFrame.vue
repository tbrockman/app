<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,3.25A1.76,1.76,0,0,0,12.25,1.5H1.75A1.76,1.76,0,0,0,0,3.25v7.5A1.76,1.76,0,0,0,1.75,12.5h10.5A1.76,1.76,0,0,0,14,10.75ZM5.25,5H3.75a.25.25,0,0,0-.25.25v1.5a.75.75,0,0,1-1.5,0V4.25a.76.76,0,0,1,.75-.75h2.5a.75.75,0,0,1,0,1.5ZM12,9.75a.76.76,0,0,1-.75.75H8.75a.75.75,0,0,1,0-1.5h1.5a.25.25,0,0,0,.25-.25V7.25a.75.75,0,0,1,1.5,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ImagePhotoFocusFrame',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
