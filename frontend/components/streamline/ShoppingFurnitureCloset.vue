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
                d="M12,0H8a.25.25,0,0,0-.25.25v13.5A.25.25,0,0,0,8,14h4a1,1,0,0,0,1-1V1A1,1,0,0,0,12,0ZM10.75,7.5a.75.75,0,0,1-1.5,0v-1a.75.75,0,0,1,1.5,0Z"
            />
            <path
                d="M2,0A1,1,0,0,0,1,1V13a1,1,0,0,0,1,1H6a.25.25,0,0,0,.25-.25V.25A.25.25,0,0,0,6,0ZM4.75,7.5a.75.75,0,0,1-1.5,0v-1a.75.75,0,0,1,1.5,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ShoppingFurnitureCloset',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
