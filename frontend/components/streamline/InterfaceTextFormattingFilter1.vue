<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,.5a.5.5,0,0,0-.5-.5H.5A.5.5,0,0,0,0,.5,6.94,6.94,0,0,0,5.13,7.24a.5.5,0,0,1,.37.48V13.5a.5.5,0,0,0,.31.46A.43.43,0,0,0,6,14a.47.47,0,0,0,.35-.15l2-2a.47.47,0,0,0,.15-.35V7.72a.5.5,0,0,1,.37-.48A6.94,6.94,0,0,0,14,.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingFilter1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
