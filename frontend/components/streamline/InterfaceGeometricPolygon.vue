<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.85,4.15l-4-4A.47.47,0,0,0,9.5,0h-5a.47.47,0,0,0-.35.15l-4,4A.47.47,0,0,0,0,4.5v5a.47.47,0,0,0,.15.35l4,4A.47.47,0,0,0,4.5,14h5a.47.47,0,0,0,.35-.15l4-4A.47.47,0,0,0,14,9.5v-5A.47.47,0,0,0,13.85,4.15Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceGeometricPolygon',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
