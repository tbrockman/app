<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,4.25a.76.76,0,0,0-.75-.75H10.5a.25.25,0,0,1-.25-.25,3.25,3.25,0,0,0-6.5,0,.25.25,0,0,1-.25.25H.75A.75.75,0,0,0,.75,5h1A.25.25,0,0,1,2,5.25V12.5A1.5,1.5,0,0,0,3.5,14h7A1.5,1.5,0,0,0,12,12.5V5.25A.25.25,0,0,1,12.25,5h1A.76.76,0,0,0,14,4.25Zm-8.75-1a1.75,1.75,0,0,1,3.5,0,.25.25,0,0,1-.25.25h-3A.25.25,0,0,1,5.25,3.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceDeleteBin5',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
