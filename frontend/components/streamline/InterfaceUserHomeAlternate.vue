<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.36,5.51,7.68.27a1,1,0,0,0-1.36,0L.64,5.51A2,2,0,0,0,0,7v5a2,2,0,0,0,2,2H12a2,2,0,0,0,2-2V7A2,2,0,0,0,13.36,5.51ZM7,4.5a2,2,0,1,1-2,2A2,2,0,0,1,7,4.5Zm3.57,7.22a.5.5,0,0,1-.45.28H3.88a.5.5,0,0,1-.45-.28.49.49,0,0,1,.06-.53,4.49,4.49,0,0,1,7,0A.49.49,0,0,1,10.57,11.72Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUserHomeAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
