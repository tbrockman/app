<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.39,9.21A.24.24,0,0,1,11.25,9V8.5A3.75,3.75,0,0,0,7.5,4.75h-2a.24.24,0,0,1-.23-.14,2,2,0,0,0-.9-.9.24.24,0,0,1-.14-.23V.75a.75.75,0,0,0-1.5,0V3.48a.24.24,0,0,1-.14.23,2,2,0,0,0,0,3.58.24.24,0,0,1,.14.23v5.73a.75.75,0,0,0,1.5,0V7.52a.24.24,0,0,1,.14-.23,2,2,0,0,0,.9-.9.24.24,0,0,1,.23-.14h2A2.25,2.25,0,0,1,9.75,8.5V9a.24.24,0,0,1-.14.23,2,2,0,1,0,1.78,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceHierarchy11',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
