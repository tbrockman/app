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
                d="M2.75,0A2.75,2.75,0,0,0,0,2.75v1A2.75,2.75,0,0,0,1.83,6.33.26.26,0,0,1,2,6.57v6.68a.75.75,0,0,0,1.5,0V6.57a.26.26,0,0,1,.17-.24A2.75,2.75,0,0,0,5.5,3.75v-1A2.75,2.75,0,0,0,2.75,0Z"
            />
            <path
                d="M13.25,12.5a5.5,5.5,0,0,1,0-11A.76.76,0,0,0,14,.75.76.76,0,0,0,13.25,0a7,7,0,0,0,0,14,.75.75,0,0,0,0-1.5Z"
            />
            <path
                d="M13.5,10.5a3.5,3.5,0,0,1,0-7h.25a.25.25,0,0,1,.25.25v6.5a.25.25,0,0,1-.25.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodKitchenwareSpoonPlate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
