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
                d="M1.07,12.94a3.62,3.62,0,0,1,0-5.14L2.32,6.56A1,1,0,0,1,3.73,8L2.48,9.21a1.64,1.64,0,0,0,0,2.32,1.7,1.7,0,0,0,2.32,0l.73-.74a1,1,0,0,1,1.42,0A1,1,0,0,1,7,12.2l-.74.74A3.65,3.65,0,0,1,1.07,12.94Z"
            />
            <path
                d="M10.36,10.51a1,1,0,0,1,0-2,1.63,1.63,0,1,0,0-3.26H8.5a1,1,0,0,1,0-2h1.86a3.63,3.63,0,1,1,0,7.26Z"
            />
            <path
                d="M5.25,3.49a1,1,0,0,1-1-1V1a1,1,0,0,1,2,0V2.49A1,1,0,0,1,5.25,3.49Z"
            />
            <path
                d="M1.88,4.81l-1.45-1A1,1,0,0,1,1.57,2.17L3,3.17A1,1,0,1,1,1.88,4.81Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceLinkBroken',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
