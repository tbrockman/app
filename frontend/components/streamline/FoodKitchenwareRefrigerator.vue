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
                d="M12,5.75a.25.25,0,0,0,.25-.25V1.75A1.76,1.76,0,0,0,10.5,0h-7A1.76,1.76,0,0,0,1.75,1.75V5.5A.25.25,0,0,0,2,5.75Zm-8.25-3a.75.75,0,0,1,1.5,0v1a.75.75,0,0,1-1.5,0Z"
            />
            <path
                d="M2,7.25a.25.25,0,0,0-.25.25v3.75A1.74,1.74,0,0,0,3.25,13v.28a.75.75,0,0,0,1.5,0V13h4.5v.25a.75.75,0,0,0,1.5,0V13a1.74,1.74,0,0,0,1.5-1.72V7.5A.25.25,0,0,0,12,7.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodKitchenwareRefrigerator',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
