<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.12,13H1.88a1.89,1.89,0,0,1-1.62-.92,1.86,1.86,0,0,1,0-1.93L5.39,1.86A1.88,1.88,0,0,1,7,1H7a1.85,1.85,0,0,1,1.6.86l5.12,8.29a1.86,1.86,0,0,1,0,1.94A1.88,1.88,0,0,1,12.12,13ZM2.34,10.62a.25.25,0,0,0,0,.25.26.26,0,0,0,.22.13h8.9a.26.26,0,0,0,.22-.13.25.25,0,0,0,0-.25L7.21,3.41a.24.24,0,0,0-.42,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceGeometricTriangleAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
