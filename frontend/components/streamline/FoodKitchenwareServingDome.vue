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
                d="M8.21,2.24A.26.26,0,0,1,8,2V1.38a1,1,0,0,0-2,0V2a.26.26,0,0,1-.21.25A7,7,0,0,0,0,9.12a1.5,1.5,0,0,0,1.5,1.5h11A1.5,1.5,0,0,0,14,9.12,7,7,0,0,0,8.21,2.24Z"
            />
            <path
                d="M13.25,13.62H.75A.75.75,0,0,1,0,12.88a.76.76,0,0,1,.75-.76h12.5a.76.76,0,0,1,.75.76A.75.75,0,0,1,13.25,13.62Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodKitchenwareServingDome',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
