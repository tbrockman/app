<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.9,2.88a.7.7,0,0,0-.21-.24A10.22,10.22,0,0,0,7,1.25,10.22,10.22,0,0,0,1.31,2.64a.7.7,0,0,0-.21.24A9.17,9.17,0,0,0,0,7a9.17,9.17,0,0,0,1.1,4.12.7.7,0,0,0,.21.24A10.22,10.22,0,0,0,7,12.75a10.22,10.22,0,0,0,5.69-1.39.7.7,0,0,0,.21-.24A9.17,9.17,0,0,0,14,7,9.17,9.17,0,0,0,12.9,2.88Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ImagePhotoCompositionOval',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
