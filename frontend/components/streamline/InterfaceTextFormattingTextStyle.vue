<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.5,2a2,2,0,0,0-2-2h-9a2,2,0,0,0-2,2V3.5a1,1,0,0,0,2,0V2.25A.25.25,0,0,1,2.75,2h3A.25.25,0,0,1,6,2.25v9.5a.25.25,0,0,1-.25.25H4.5a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2H8.25A.25.25,0,0,1,8,11.75V2.25A.25.25,0,0,1,8.25,2h3a.25.25,0,0,1,.25.25V3.5a1,1,0,0,0,2,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingTextStyle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
