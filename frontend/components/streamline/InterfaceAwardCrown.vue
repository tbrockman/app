<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.69,4a.47.47,0,0,0-.54.11L10.78,6.51a.26.26,0,0,1-.2.08.27.27,0,0,1-.18-.11l-3-4.27a.51.51,0,0,0-.82,0l-3,4.27a.27.27,0,0,1-.18.11.26.26,0,0,1-.2-.08L.85,4.15A.47.47,0,0,0,.31,4,.49.49,0,0,0,0,4.5V10a2,2,0,0,0,2,2H12a2,2,0,0,0,2-2V4.5A.49.49,0,0,0,13.69,4Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAwardCrown',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
