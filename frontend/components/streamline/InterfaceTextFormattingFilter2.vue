<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.9.8a.51.51,0,0,0,0-.52A.51.51,0,0,0,13.5,0H.5A.51.51,0,0,0,.05.28.51.51,0,0,0,.1.8L5.29,7.59a1,1,0,0,1,.21.61v5.3a.5.5,0,0,0,.31.46A.43.43,0,0,0,6,14a.47.47,0,0,0,.35-.15l2-2a.47.47,0,0,0,.15-.35V8.2a1,1,0,0,1,.21-.61Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingFilter2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
