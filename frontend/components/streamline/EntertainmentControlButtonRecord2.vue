<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM7,10a3,3,0,1,1,3-3A3,3,0,0,1,7,10Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentControlButtonRecord2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
