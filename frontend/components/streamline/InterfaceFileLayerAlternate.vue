<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.5,0H1.5A1.5,1.5,0,0,0,0,1.5v11A1.5,1.5,0,0,0,1.5,14H8.25a.47.47,0,0,0,.35-.15L13.85,8.6A.47.47,0,0,0,14,8.25V1.5A1.5,1.5,0,0,0,12.5,0Zm-.93,8.18L8.18,11.57a.26.26,0,0,1-.28.06.25.25,0,0,1-.15-.23V8.25a.5.5,0,0,1,.5-.5H11.4a.25.25,0,0,1,.23.15A.26.26,0,0,1,11.57,8.18Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFileLayerAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
