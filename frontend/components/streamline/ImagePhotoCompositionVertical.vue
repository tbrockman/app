<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.88,12.27A13.45,13.45,0,0,1,10.75,7a13.37,13.37,0,0,1,1.13-5.26A1.21,1.21,0,0,0,11.77.56a1.24,1.24,0,0,0-1-.56H3.27a1.24,1.24,0,0,0-1,.56,1.2,1.2,0,0,0-.11,1.17A13.14,13.14,0,0,1,3.25,7a13.06,13.06,0,0,1-1.13,5.26,1.21,1.21,0,0,0,.11,1.18,1.24,1.24,0,0,0,1,.56h7.46a1.24,1.24,0,0,0,1-.56A1.2,1.2,0,0,0,11.88,12.27Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ImagePhotoCompositionVertical',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
