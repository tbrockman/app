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
                d="M.25,3v8a3,3,0,0,0,6,0V3a3,3,0,0,0-6,0Zm4.5.5A1.5,1.5,0,1,1,3.25,2,1.5,1.5,0,0,1,4.75,3.5Z"
            />
            <path
                d="M7.75,3v8a3,3,0,0,0,6,0V3a3,3,0,0,0-6,0Zm4.5,7.5A1.5,1.5,0,1,1,10.75,9,1.5,1.5,0,0,1,12.25,10.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfacePageControllerSlide',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
