<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M9.5,5.5A2,2,0,0,0,7.69,6.64a.18.18,0,0,1-.17.11h0A2.25,2.25,0,0,1,5.25,4.5V4a.24.24,0,0,1,.14-.23,2,2,0,1,0-1.78,0A.24.24,0,0,1,3.75,4v6a.24.24,0,0,1-.14.23,2,2,0,1,0,1.78,0A.24.24,0,0,1,5.25,10V8a.23.23,0,0,1,.13-.21.23.23,0,0,1,.25,0,3.71,3.71,0,0,0,1.87.5h0a.18.18,0,0,1,.17.11A2,2,0,1,0,9.5,5.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceHierarchy4',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
