<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.25,3H10a.25.25,0,0,1-.25-.25,2.75,2.75,0,0,0-5.5,0A.25.25,0,0,1,4,3H2.75A2.75,2.75,0,0,0,0,5.75v5.5A2.75,2.75,0,0,0,2.75,14h8.5A2.75,2.75,0,0,0,14,11.25V5.75A2.75,2.75,0,0,0,11.25,3Zm-5.5-.25a1.25,1.25,0,0,1,2.5,0A.25.25,0,0,1,8,3H6A.25.25,0,0,1,5.75,2.75Zm6.75,8.5a1.25,1.25,0,0,1-1.25,1.25H2.75A1.25,1.25,0,0,1,1.5,11.25V5.75A1.25,1.25,0,0,1,2.75,4.5h8.5A1.25,1.25,0,0,1,12.5,5.75Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ShoppingBagSuitcase2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
