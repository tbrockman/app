<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.5,14h-9A2.5,2.5,0,0,1,0,11.5v-9A2.5,2.5,0,0,1,2.5,0h9A2.5,2.5,0,0,1,14,2.5v9A2.5,2.5,0,0,1,11.5,14ZM2.5,2a.5.5,0,0,0-.5.5v9a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5v-9a.5.5,0,0,0-.5-.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceGeometricSquareAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
