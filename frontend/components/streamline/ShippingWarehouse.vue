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
                d="M14,6.75A.76.76,0,0,0,13.25,6H.75A.76.76,0,0,0,0,6.75v6.5A.76.76,0,0,0,.75,14h3.5a.25.25,0,0,0,.25-.25V10.5A1.25,1.25,0,0,1,5.75,9.25h2.5A1.25,1.25,0,0,1,9.5,10.5v3.25a.25.25,0,0,0,.25.25h3.5a.76.76,0,0,0,.75-.75Z"
            />
            <path
                d="M14,3.75A3.75,3.75,0,0,0,10.25,0H3.75A3.75,3.75,0,0,0,0,3.75a.76.76,0,0,0,.75.75h12.5A.76.76,0,0,0,14,3.75Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ShippingWarehouse',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
