<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.5,2.5H1.5A1.5,1.5,0,0,0,0,4v6a1.5,1.5,0,0,0,1.5,1.5h11A1.5,1.5,0,0,0,14,10V4A1.5,1.5,0,0,0,12.5,2.5Zm-9.25,3h-1a.75.75,0,0,1,0-1.5h1a.75.75,0,0,1,0,1.5ZM7,8.75A1.75,1.75,0,1,1,8.75,7,1.76,1.76,0,0,1,7,8.75ZM11.75,10h-1a.75.75,0,0,1,0-1.5h1a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MoneyCashBill2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
