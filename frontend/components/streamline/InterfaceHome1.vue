<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.85,6.65,7.35.15a.48.48,0,0,0-.7,0L.15,6.65A.47.47,0,0,0,0,7v5.06A1.94,1.94,0,0,0,1.94,14H12.06A1.94,1.94,0,0,0,14,12.06V7A.47.47,0,0,0,13.85,6.65Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceHome1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
