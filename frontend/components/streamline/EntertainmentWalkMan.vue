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
                d="M8.5,6h-3A1.5,1.5,0,0,0,4,7.5v5A1.5,1.5,0,0,0,5.5,14h3A1.5,1.5,0,0,0,10,12.5v-5A1.5,1.5,0,0,0,8.5,6Zm-.75,5.25a.75.75,0,0,1-1.5,0V8.75a.75.75,0,0,1,1.5,0Z"
            />
            <path
                d="M13.14,6.65A.27.27,0,0,1,13,6.42V6A6,6,0,0,0,1,6v.42a.27.27,0,0,1-.14.23A1.49,1.49,0,0,0,0,8v2a1.5,1.5,0,0,0,1.5,1.5H2a.5.5,0,0,0,.5-.5V6a4.5,4.5,0,0,1,9,0v5a.5.5,0,0,0,.5.5h.5A1.5,1.5,0,0,0,14,10V8A1.49,1.49,0,0,0,13.14,6.65Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentWalkMan',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
