<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.5,3H6.25a1.5,1.5,0,0,0-1.5,1.5v.25A.25.25,0,0,1,4.5,5H2.75A2.75,2.75,0,0,0,0,7.75v3.5A.76.76,0,0,0,.75,12h.51a.25.25,0,0,1,.25.22,2,2,0,0,0,4,0A.25.25,0,0,1,5.74,12H8.26a.25.25,0,0,1,.25.22,2,2,0,0,0,4,0,.25.25,0,0,1,.25-.22h.76a.5.5,0,0,0,.5-.5v-7A1.5,1.5,0,0,0,12.5,3ZM1.5,7.75A1.25,1.25,0,0,1,2.75,6.5h1A.25.25,0,0,1,4,6.75v1.5a.25.25,0,0,1-.25.25h-2a.25.25,0,0,1-.25-.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ShippingTransferTruck',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
