<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12,4H10a.25.25,0,0,1-.25-.25V3a2.75,2.75,0,0,0-5.5,0v.75A.25.25,0,0,1,4,4H2A2,2,0,0,0,0,6v6a2,2,0,0,0,2,2H12a2,2,0,0,0,2-2V6A2,2,0,0,0,12,4ZM5.75,3a1.25,1.25,0,0,1,2.5,0v.75A.25.25,0,0,1,8,4H6a.25.25,0,0,1-.25-.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ShoppingBagSuitcase2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
