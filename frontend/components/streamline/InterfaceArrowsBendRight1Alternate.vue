<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.71,4.54,11.21,2A1,1,0,0,0,9.79,2a1,1,0,0,0-.29.71V4a.25.25,0,0,1-.25.25H2a2,2,0,0,0-2,2v5a1,1,0,0,0,2,0V6.5a.25.25,0,0,1,.25-.25h7a.25.25,0,0,1,.25.25V7.75a1,1,0,0,0,.29.71,1,1,0,0,0,1.42,0L13.71,6A1,1,0,0,0,13.71,4.54Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsBendRight1Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
