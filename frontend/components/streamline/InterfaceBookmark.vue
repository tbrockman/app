<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10,0H4A1.5,1.5,0,0,0,2.5,1.5v12a.5.5,0,0,0,.31.46.47.47,0,0,0,.54-.11l3.47-3.47a.27.27,0,0,1,.36,0l3.47,3.47a.48.48,0,0,0,.54.11.5.5,0,0,0,.31-.46V1.5A1.5,1.5,0,0,0,10,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceBookmark',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
