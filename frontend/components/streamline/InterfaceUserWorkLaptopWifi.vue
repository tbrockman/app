<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="10.02" cy="7" r="2" />
            <path
                d="M14,13.43A4,4,0,0,0,10,10a4.07,4.07,0,0,0-1.16.17.24.24,0,0,0-.17.23.23.23,0,0,0,.16.24A2.51,2.51,0,0,1,10.52,13a2.54,2.54,0,0,1-.1.68.28.28,0,0,0,0,.22.26.26,0,0,0,.2.1h2.82a.5.5,0,0,0,.38-.17A.49.49,0,0,0,14,13.43Z"
            />
            <path
                d="M9,13a1,1,0,0,0-1-1H7.15a.25.25,0,0,1-.23-.17l-.8-2.46A.5.5,0,0,0,5.64,9H.52a.48.48,0,0,0-.4.2A.47.47,0,0,0,0,9.63l1.22,4a.5.5,0,0,0,.48.37H8A1,1,0,0,0,9,13Zm-5.5-.75a.75.75,0,1,1,.75-.75A.75.75,0,0,1,3.52,12.25Z"
            />
            <path
                d="M6.44,2.67a.74.74,0,0,1-.53-.22,3.25,3.25,0,0,0-4.59,0,.75.75,0,0,1-1.06,0,.74.74,0,0,1,0-1.06A4.75,4.75,0,0,1,7,1.39.74.74,0,0,1,7,2.45.71.71,0,0,1,6.44,2.67Z"
            />
            <path
                d="M4.68,4.94a.71.71,0,0,1-.53-.22.79.79,0,0,0-1.07,0A.75.75,0,0,1,2,3.66a2.26,2.26,0,0,1,3.19,0,.75.75,0,0,1,0,1.06A.74.74,0,0,1,4.68,4.94Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUserWorkLaptopWifi',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
