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
                d="M12.75,9A3.26,3.26,0,0,0,9.5,5.75H9A1.49,1.49,0,0,0,7.75,5h-5a1.5,1.5,0,0,0-1.5,1.5v5A2.5,2.5,0,0,0,3.75,14h3a2.49,2.49,0,0,0,2.37-1.75H9.5A3.26,3.26,0,0,0,12.75,9ZM9.5,10.75a.25.25,0,0,1-.25-.25v-3a.25.25,0,0,1,.25-.25,1.75,1.75,0,0,1,0,3.5Z"
            />
            <path
                d="M3.75,3.5a.76.76,0,0,0,.75-.75v-2A.75.75,0,0,0,3,.75v2A.76.76,0,0,0,3.75,3.5Z"
            />
            <path
                d="M6.75,3.5a.76.76,0,0,0,.75-.75v-2A.75.75,0,0,0,6,.75v2A.76.76,0,0,0,6.75,3.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodDrinksCoffeeMug',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
