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
                d="M10,0a4,4,0,1,0,4,4A4,4,0,0,0,10,0Zm.75,5a.75.75,0,0,1-1.5,0V3a.75.75,0,0,1,1.5,0Z"
            />
            <path
                d="M7.44,9.74h-.8a.26.26,0,0,1-.24-.19A3.57,3.57,0,0,0,3,7H.75a.75.75,0,0,0,0,1.5H3a2.06,2.06,0,0,1,1.69.85.23.23,0,0,1,0,.26.26.26,0,0,1-.22.14H3.25a.75.75,0,0,0,0,1.5H7.44a2.09,2.09,0,0,1,1.69.85.27.27,0,0,1,0,.26.27.27,0,0,1-.23.14H.75a.75.75,0,0,0,0,1.5h9.5a.76.76,0,0,0,.75-.75A3.54,3.54,0,0,0,7.44,9.74Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MoneyCashCoinShare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
