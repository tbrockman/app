<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="7" cy="7" r="3.5" />
            <path
                d="M.18,10.89a.5.5,0,0,0-.18.34.48.48,0,0,0,.12.36L2,13.82a.5.5,0,0,0,.36.18.53.53,0,0,0,.38-.14C3.47,13.1,5,11.35,3.83,10.2S.94,10.26.18,10.89Z"
            />
            <path
                d="M13.82,3.11A.5.5,0,0,0,14,2.77a.48.48,0,0,0-.12-.36L12,.18A.5.5,0,0,0,11.67,0a.53.53,0,0,0-.38.14C10.53.9,9,2.65,10.17,3.8S13.06,3.74,13.82,3.11Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodCandy',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
