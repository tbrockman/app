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
                d="M5.5,3a3,3,0,0,0-3-3,4.12,4.12,0,0,0-2,.59A1,1,0,0,0,0,1.43V4.6a1,1,0,0,0,.43.82A3.63,3.63,0,0,0,2.1,6,1,1,0,0,1,3,7v5.78a1.25,1.25,0,0,0,2.5,0Z"
            />
            <path
                d="M14,1.43a1,1,0,0,0-.45-.84A4.12,4.12,0,0,0,11.5,0a3,3,0,0,0-3,3v9.75a1.25,1.25,0,0,0,2.5,0V7a1,1,0,0,1,.9-1,3.63,3.63,0,0,0,1.67-.55A1,1,0,0,0,14,4.6Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentEarPods',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
