<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.25,7.5h-.5V5.75a5.75,5.75,0,0,0-11.5,0V7.5H.75A.75.75,0,0,0,.75,9H1a.25.25,0,0,1,.25.25v3A1.76,1.76,0,0,0,3,14H6a.25.25,0,0,0,.25-.25v-6A.25.25,0,0,0,6,7.5H3a.25.25,0,0,1-.25-.25V5.75a4.25,4.25,0,0,1,8.5,0v1.5A.25.25,0,0,1,11,7.5H8a.25.25,0,0,0-.25.25v6A.25.25,0,0,0,8,14h3a1.76,1.76,0,0,0,1.75-1.75v-3A.25.25,0,0,1,13,9h.25a.75.75,0,0,0,0-1.5ZM3.5,10.25a.75.75,0,0,1,1.5,0v1a.75.75,0,0,1-1.5,0Zm7,1a.75.75,0,0,1-1.5,0v-1a.75.75,0,0,1,1.5,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ShoppingFurnitureDressingTable',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
