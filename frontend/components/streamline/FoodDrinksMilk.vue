<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12,5.48,10.77,2.4a.2.2,0,0,1,0-.09V1.75A1.76,1.76,0,0,0,9,0H5A1.76,1.76,0,0,0,3.25,1.75v.56a.2.2,0,0,1,0,.09L2.05,5.48a.86.86,0,0,0,0,.27v6.5A1.76,1.76,0,0,0,3.75,14h6.5A1.76,1.76,0,0,0,12,12.25V5.75A.86.86,0,0,0,12,5.48ZM4.21,5A.25.25,0,0,1,4,4.89a.24.24,0,0,1,0-.23l.48-1.25a.25.25,0,0,1,.24-.16H9.31a.25.25,0,0,1,.24.16L10,4.66a.24.24,0,0,1,0,.23A.25.25,0,0,1,9.79,5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'FoodDrinksMilk',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
