<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1a1,1,0,0,0-1-1H1A1,1,0,0,0,0,1,7,7,0,0,0,5.31,7.79.26.26,0,0,1,5.5,8V13.5a.5.5,0,0,0,.31.46A.43.43,0,0,0,6,14a.47.47,0,0,0,.35-.15l2-2a.47.47,0,0,0,.15-.35V8a.26.26,0,0,1,.19-.25A7,7,0,0,0,14,1ZM7,6A5,5,0,0,1,2.18,2.32a.24.24,0,0,1,0-.22.26.26,0,0,1,.2-.1h9.16a.26.26,0,0,1,.2.1.24.24,0,0,1,0,.22A5,5,0,0,1,7,6Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingFilter1Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
