<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.71,2.3A1.45,1.45,0,0,0,13.85.79,1.41,1.41,0,0,0,12.57,0H1.43A1.4,1.4,0,0,0,.15.8,1.43,1.43,0,0,0,.31,2.32L5.44,8.64a.25.25,0,0,1,.06.16v4.7a.5.5,0,0,0,.31.46A.43.43,0,0,0,6,14a.47.47,0,0,0,.35-.15l2-2a.47.47,0,0,0,.15-.35V8.8a.25.25,0,0,1,.06-.16ZM7.6,6.65a.29.29,0,0,1-.2.09H6.6a.29.29,0,0,1-.2-.09L3,2.41a.26.26,0,0,1,0-.27A.26.26,0,0,1,3.15,2h7.7a.26.26,0,0,1,.22.14.26.26,0,0,1,0,.27Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingFilter2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
