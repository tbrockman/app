<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25,0h-3A.25.25,0,0,0,9,.25v4.5a.76.76,0,0,1-.75.75H5.75A.76.76,0,0,1,5,4.75V.25A.25.25,0,0,0,4.75,0h-3A1.76,1.76,0,0,0,0,1.75v10.5A1.76,1.76,0,0,0,1.75,14h10.5A1.76,1.76,0,0,0,14,12.25V1.75A1.76,1.76,0,0,0,12.25,0Zm-1.5,11.5h-2a.75.75,0,0,1,0-1.5h2a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ShippingBox1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
