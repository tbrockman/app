<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M4.49,10.06h0V8a.25.25,0,0,1,.25-.25h4.5A.25.25,0,0,1,9.5,8v2a.74.74,0,0,0,.22.5.75.75,0,0,0,1.06,0l3-3a.75.75,0,0,0,0-1.06l-3-3a.75.75,0,0,0-1.06,0,.78.78,0,0,0-.21.47h0V6a.25.25,0,0,1-.25.25H4.75A.25.25,0,0,1,4.5,6V4a.74.74,0,0,0-.22-.5.75.75,0,0,0-1.06,0l-3,3a.75.75,0,0,0,0,1.06l3,3a.75.75,0,0,0,1.06,0A.78.78,0,0,0,4.49,10.06Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsHorizontalAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
