<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,3.5a3,3,0,0,0-3-3H10a1,1,0,0,0,0,2h1a1,1,0,0,1,1,1V7.75a.25.25,0,0,1-.25.25H2.25A.25.25,0,0,1,2,7.75V3.5a1,1,0,0,1,1-1H4a1,1,0,0,0,0-2H3a3,3,0,0,0-3,3v8a2,2,0,0,0,2,2H4.5a2,2,0,0,0,2-2V10.25A.25.25,0,0,1,6.75,10h1a.24.24,0,0,1,.25.25v1.37a2,2,0,0,0,.43,1.47,1.46,1.46,0,0,0,1.07.41H12a2,2,0,0,0,2-2v-8Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceContentEyeGlasses',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
