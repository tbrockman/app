<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10.83,6.6a.25.25,0,0,1,0-.35,3.7,3.7,0,0,0,1-2.5A3.75,3.75,0,0,0,8,0H3.77a2,2,0,0,0-2,2V12a2,2,0,0,0,2,2H8a4.25,4.25,0,0,0,2.85-7.4ZM3.77,2.25A.25.25,0,0,1,4,2H8A1.75,1.75,0,0,1,8,5.5H4a.25.25,0,0,1-.25-.25ZM8,12H4a.25.25,0,0,1-.25-.25v-4A.25.25,0,0,1,4,7.5H8A2.25,2.25,0,0,1,8,12Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingBold',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
