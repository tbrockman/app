<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10.06,9.51H8a.25.25,0,0,1-.25-.25V4.75A.25.25,0,0,1,8,4.5h2a.74.74,0,0,0,.5-.22.75.75,0,0,0,0-1.06l-3-3a.75.75,0,0,0-1.06,0l-3,3a.75.75,0,0,0,0,1.06.78.78,0,0,0,.47.21H6a.25.25,0,0,1,.25.25v4.5A.25.25,0,0,1,6,9.5H4a.74.74,0,0,0-.5.22.75.75,0,0,0,0,1.06l3,3a.75.75,0,0,0,1.06,0l3-3a.75.75,0,0,0,0-1.06A.78.78,0,0,0,10.06,9.51Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsVerticalAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
