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
                d="M11.59.33,5.17,5.6a1.81,1.81,0,0,0,0,2.8l6.41,5.27A1.48,1.48,0,0,0,14,12.53V1.47h0A1.47,1.47,0,0,0,11.59.33Z"
            />
            <rect x="0.01" width="3" height="14" rx="1.25" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentControlButtonPrevious',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
