<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M9.29,1.79A1,1,0,0,0,9,2.5V4.25a.25.25,0,0,1-.25.25H5a5,5,0,0,0-5,5v2a1,1,0,0,0,2,0v-2a3,3,0,0,1,3-3H8.75A.25.25,0,0,1,9,6.75V8.5a1,1,0,0,0,.29.71,1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,0-1.42l-3-3A1,1,0,0,0,9.29,1.79Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsBendUpRight2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
