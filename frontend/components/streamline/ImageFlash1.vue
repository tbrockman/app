<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.64,4.54a1.24,1.24,0,0,0-1.16-.79H9.43a.27.27,0,0,1-.22-.12.25.25,0,0,1,0-.25L10.42,1.1a.73.73,0,0,0,0-.74A.75.75,0,0,0,9.76,0H4.26a.76.76,0,0,0-.69.45L1.38,5.5A1.25,1.25,0,0,0,2.52,7.25h1.4a.26.26,0,0,1,.2.1.25.25,0,0,1,0,.22L2.54,13a.75.75,0,0,0,.32.85.8.8,0,0,0,.4.11.76.76,0,0,0,.51-.2l8.56-7.88A1.25,1.25,0,0,0,12.64,4.54Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ImageFlash1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
