<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0Zm3.41,9.59-.31.31a2.14,2.14,0,0,1-2.46.58A12,12,0,0,1,3.52,6.36,2.15,2.15,0,0,1,4.1,3.9l.31-.31a.67.67,0,0,1,.92-.12l1,1a.67.67,0,0,1-.12.92.67.67,0,0,0-.12.92l1.6,1.6a.67.67,0,0,0,.92-.12h0a.67.67,0,0,1,.92-.12l1,1A.67.67,0,0,1,10.41,9.59Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'PhoneTelephoneCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
