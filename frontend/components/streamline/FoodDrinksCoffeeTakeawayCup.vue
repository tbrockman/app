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
                d="M11.31,2.25a.26.26,0,0,0,.21-.11.3.3,0,0,0,0-.23L11,.33A.5.5,0,0,0,10.5,0h-7A.5.5,0,0,0,3,.33L2.45,1.91a.3.3,0,0,0,0,.23.26.26,0,0,0,.21.11Z"
            />
            <path
                d="M2.53,8.75a.22.22,0,0,0-.19.09.24.24,0,0,0-.06.2L3,13.58A.49.49,0,0,0,3.5,14h7a.49.49,0,0,0,.49-.42L11.72,9a.24.24,0,0,0-.06-.2.22.22,0,0,0-.19-.09Z"
            />
            <rect x="1" y="3.5" width="12" height="4" rx="1" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodDrinksCoffeeTakeawayCup',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
