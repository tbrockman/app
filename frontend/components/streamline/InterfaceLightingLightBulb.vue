<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path d="M9,14H5a.75.75,0,0,1,0-1.5H9A.75.75,0,0,1,9,14Z" />
            <path
                d="M9.75,10.25A1.25,1.25,0,0,1,8.5,11.5h-3a1.25,1.25,0,0,1-1.25-1.25V9.72a5.25,5.25,0,1,1,8-4.47,5.21,5.21,0,0,1-2.5,4.47Zm-4-.5A.25.25,0,0,0,6,10H8a.25.25,0,0,0,.25-.25V9.28a.75.75,0,0,1,.42-.67,3.75,3.75,0,1,0-3.34,0,.75.75,0,0,1,.42.67Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceLightingLightBulb',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
