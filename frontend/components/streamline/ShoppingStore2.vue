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
                d="M7.75,8.5a.25.25,0,0,0-.25.25v2a.5.5,0,0,1-.5.5H3a.5.5,0,0,1-.5-.5v-2a.25.25,0,0,0-.25-.25h-1A.25.25,0,0,0,1,8.75v4.5a.76.76,0,0,0,.75.75h10.5a.76.76,0,0,0,.75-.75V8.75a.25.25,0,0,0-.25-.25Z"
            />
            <path
                d="M13.9,4.15,12.71,1a1.5,1.5,0,0,0-1.4-1H2.69a1.5,1.5,0,0,0-1.4,1L.09,4.15A1.6,1.6,0,0,0,0,4.68V6A1,1,0,0,0,1,7H13a1,1,0,0,0,1-1V4.68A1.39,1.39,0,0,0,13.9,4.15Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ShoppingStore2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
