<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,13a1,1,0,0,0-1-1H3.38a.24.24,0,0,1-.23-.16.23.23,0,0,1,.06-.27L6.9,8.06a1.52,1.52,0,0,0,0-2.14L3.21,2.43a.23.23,0,0,1-.06-.27A.24.24,0,0,1,3.38,2H13a1,1,0,0,0,0-2H1.5A1.48,1.48,0,0,0,.12.93,1.49,1.49,0,0,0,.46,2.58L4.73,6.64a.49.49,0,0,1,0,.72L.44,11.44A1.5,1.5,0,0,0,1.5,14H13A1,1,0,0,0,14,13Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingSigma',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
