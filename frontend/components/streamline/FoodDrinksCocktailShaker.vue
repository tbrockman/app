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
                d="M10.93,6.25a.25.25,0,0,0,.2-.1.27.27,0,0,0,0-.23L10.7,4.53a1.48,1.48,0,0,0-1.42-1H4.72a1.48,1.48,0,0,0-1.42,1L2.83,5.92a.27.27,0,0,0,0,.23.25.25,0,0,0,.2.1Z"
            />
            <path
                d="M2.91,7.75a.25.25,0,0,0-.2.09.28.28,0,0,0,0,.2l.73,4.65A1.51,1.51,0,0,0,4.88,14H9.12a1.49,1.49,0,0,0,1.48-1.3L11.34,8a.28.28,0,0,0-.05-.2.25.25,0,0,0-.2-.09Z"
            />
            <path d="M6.25,2h1.5a1,1,0,0,0,0-2H6.25a1,1,0,0,0,0,2Z" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodDrinksCocktailShaker',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
