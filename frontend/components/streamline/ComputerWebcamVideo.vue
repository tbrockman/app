<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.57,3.4a1,1,0,0,0-.92-.11h0l-1.77.78a.29.29,0,0,1-.24,0,.26.26,0,0,1-.11-.21V3.5A1.5,1.5,0,0,0,9,2H1.5A1.5,1.5,0,0,0,0,3.5v7A1.5,1.5,0,0,0,1.5,12H9a1.5,1.5,0,0,0,1.5-1.5v-.35a.26.26,0,0,1,.11-.21.29.29,0,0,1,.24,0l1.8.79a1,1,0,0,0,.92-.11A1,1,0,0,0,14,9.78V4.22A1,1,0,0,0,13.57,3.4Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerWebcamVideo',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
