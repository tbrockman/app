<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,6.5A1.5,1.5,0,0,0,12.5,5H9.25A.25.25,0,0,1,9,4.75V1.5A1.5,1.5,0,0,0,7.5,0h-1A1.5,1.5,0,0,0,5,1.5V4.75A.25.25,0,0,1,4.75,5H1.5A1.5,1.5,0,0,0,0,6.5v1A1.5,1.5,0,0,0,1.5,9H4.75A.25.25,0,0,1,5,9.25V12.5A1.5,1.5,0,0,0,6.5,14h1A1.5,1.5,0,0,0,9,12.5V9.25A.25.25,0,0,1,9.25,9H12.5A1.5,1.5,0,0,0,14,7.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAdd2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
