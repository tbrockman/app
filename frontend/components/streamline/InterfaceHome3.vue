<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path
                d="M13.71,6.29l-6-6a1,1,0,0,0-1.42,0l-6,6A1,1,0,0,0,1.71,7.71L7,2.41l5.29,5.3a1,1,0,0,0,1.42,0A1,1,0,0,0,13.71,6.29Z"
            />
            <path
                d="M7.35,5.15a.48.48,0,0,0-.7,0l-4.5,4.5A.47.47,0,0,0,2,10v3.5a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5V10a.47.47,0,0,0-.15-.35Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceHome3',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
