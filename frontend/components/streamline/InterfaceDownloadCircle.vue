<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,14A7,7,0,1,0,0,7,7,7,0,0,0,7,14ZM4.22,7.22a.75.75,0,0,1,1.06,0l1,1V4a.75.75,0,0,1,1.5,0V8.19l1-1A.75.75,0,0,1,9.78,8.28L7.53,10.53a.75.75,0,0,1-1.06,0L4.22,8.28A.75.75,0,0,1,4.22,7.22Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceDownloadCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
