<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.46,8.62H10a.28.28,0,0,1-.27-.27V4.85a.54.54,0,0,0-.54-.54H5.65A.28.28,0,0,1,5.38,4V.54A.54.54,0,0,0,4.85,0H.54A.54.54,0,0,0,0,.54V13.46A.54.54,0,0,0,.54,14H13.46a.54.54,0,0,0,.54-.54V9.15A.54.54,0,0,0,13.46,8.62Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderStairs2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
