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
                d="M0,4A1.5,1.5,0,0,0,1.5,5.5h11A1.5,1.5,0,0,0,14,4c0-2.35-1.85-4-4.5-4h-5C1.85,0,0,1.65,0,4Z"
            />
            <path
                d="M14,7.5a.76.76,0,0,0-.75-.75H.75a.75.75,0,0,0,0,1.5h12.5A.76.76,0,0,0,14,7.5Z"
            />
            <path
                d="M14,10.5a1,1,0,0,0-1-1H7a.47.47,0,0,0-.35.15L5.53,10.76a.24.24,0,0,1-.29.05L2.72,9.55A.54.54,0,0,0,2.5,9.5H1a1,1,0,0,0-1,1A3.5,3.5,0,0,0,3.5,14h7A3.5,3.5,0,0,0,14,10.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodBurger',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
