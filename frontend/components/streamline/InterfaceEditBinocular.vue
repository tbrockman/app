<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.88,9.31l-1.74-7.9A1.75,1.75,0,0,0,10.43,0h-.18a3.75,3.75,0,0,0-3,1.57.25.25,0,0,1-.4,0A3.75,3.75,0,0,0,3.75,0H3.57A1.76,1.76,0,0,0,1.86,1.4L.12,9.31a3.67,3.67,0,0,0-.12.94,3.75,3.75,0,0,0,6.8,2.18.25.25,0,0,1,.4,0A3.75,3.75,0,0,0,14,10.25,3.67,3.67,0,0,0,13.88,9.31ZM3.75,12.5A2.25,2.25,0,1,1,6,10.25,2.25,2.25,0,0,1,3.75,12.5Zm6.5,0a2.25,2.25,0,1,1,2.25-2.25A2.25,2.25,0,0,1,10.25,12.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditBinocular',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
