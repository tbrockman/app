<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.55,3.4A2.08,2.08,0,0,0,13.38.62,2.08,2.08,0,0,0,10.6.45l-5.66,4a1.62,1.62,0,0,0-.59.8L3.83,6.79A.25.25,0,0,1,3.59,7,3.4,3.4,0,0,0,1.17,8C.08,9.06,0,12.29,0,13.25A.76.76,0,0,0,.75,14c1,0,4.2-.08,5.28-1.17a3.43,3.43,0,0,0,1-2.43h0a.26.26,0,0,1,.18-.24l1.5-.5a1.62,1.62,0,0,0,.8-.59ZM5,11.77a7,7,0,0,1-3.17.7.27.27,0,0,1-.27-.27A7,7,0,0,1,2.23,9,1.94,1.94,0,0,1,3.6,8.42,1.94,1.94,0,0,1,5,9a1.84,1.84,0,0,1,0,2.74Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditPen2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
