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
                d="M13.81,4a.75.75,0,0,0-1.06-.06l-2,1.75a.33.33,0,0,1-.19.06.31.31,0,0,1-.18-.09L9.58,4.59a.25.25,0,0,0-.2-.09H4.62a.25.25,0,0,0-.2.09L3.58,5.66a.31.31,0,0,1-.18.09.33.33,0,0,1-.19-.06l-2-1.75A.76.76,0,0,0,.19,4,.75.75,0,0,0,.25,5.06L2.42,7a.27.27,0,0,1,.08.19V13a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V7.17A.27.27,0,0,1,11.58,7l2.17-1.92A.75.75,0,0,0,13.81,4Z"
            />
            <path
                d="M3.5,3h7a.5.5,0,0,0,.5-.5v-1A1.5,1.5,0,0,0,9.5,0h-5A1.5,1.5,0,0,0,3,1.5v1A.5.5,0,0,0,3.5,3Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodDrinksMilkCanister',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
