<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M9.09,3.7A.25.25,0,0,1,9,3.51V1.25A1.25,1.25,0,0,0,7.75,0H6.25A1.25,1.25,0,0,0,5,1.25V3.51a.25.25,0,0,1-.09.19A4.1,4.1,0,0,0,3.5,6.8v5.45A1.76,1.76,0,0,0,5.25,14h3.5a1.76,1.76,0,0,0,1.75-1.75V6.8A4.1,4.1,0,0,0,9.09,3.7Zm-2.92.92A.76.76,0,0,0,6.5,4V1.75a.25.25,0,0,1,.25-.25h.5a.25.25,0,0,1,.25.25V4a.76.76,0,0,0,.33.62A2.63,2.63,0,0,1,9,6.8v.45a.25.25,0,0,1-.25.25H5.25A.25.25,0,0,1,5,7.25V6.8A2.63,2.63,0,0,1,6.17,4.62ZM9,12.25a.25.25,0,0,1-.25.25H5.25A.25.25,0,0,1,5,12.25v-1A.25.25,0,0,1,5.25,11h3.5a.25.25,0,0,1,.25.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'FoodDrinksWineBottle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
