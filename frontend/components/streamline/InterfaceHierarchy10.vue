<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.5,2A2,2,0,1,0,9.61,3.79.24.24,0,0,1,9.75,4V4.5A2.25,2.25,0,0,1,7.5,6.75h-3a.25.25,0,0,1-.25-.25V4a.24.24,0,0,1,.14-.23,2,2,0,1,0-1.78,0A.24.24,0,0,1,2.75,4v6a.24.24,0,0,1-.14.23,2,2,0,1,0,1.78,0A.24.24,0,0,1,4.25,10V8.5a.25.25,0,0,1,.25-.25h3A3.75,3.75,0,0,0,11.25,4.5V4a.24.24,0,0,1,.14-.23A2,2,0,0,0,12.5,2Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceHierarchy10',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
