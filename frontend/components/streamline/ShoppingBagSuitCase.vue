<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25,3.5h-1.5a.25.25,0,0,1-.25-.25V1.75A1.76,1.76,0,0,0,8.75,0H5.25A1.76,1.76,0,0,0,3.5,1.75v1.5a.25.25,0,0,1-.25.25H1.75A1.76,1.76,0,0,0,0,5.25v7A1.76,1.76,0,0,0,1.75,14h10.5A1.76,1.76,0,0,0,14,12.25v-7A1.76,1.76,0,0,0,12.25,3.5ZM5,1.75a.25.25,0,0,1,.25-.25h3.5A.25.25,0,0,1,9,1.75v1.5a.25.25,0,0,1-.25.25H5.25A.25.25,0,0,1,5,3.25Zm5.5,9.75h-7a.75.75,0,0,1,0-1.5h7a.75.75,0,0,1,0,1.5Zm0-3.5h-7a.75.75,0,0,1,0-1.5h7a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ShoppingBagSuitCase',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
