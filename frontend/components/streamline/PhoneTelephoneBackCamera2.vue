<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10.25,0H3.75A1.76,1.76,0,0,0,2,1.75v10.5A1.76,1.76,0,0,0,3.75,14h6.5A1.76,1.76,0,0,0,12,12.25V1.75A1.76,1.76,0,0,0,10.25,0ZM4.5,9.5a1,1,0,1,1,1-1A1,1,0,0,1,4.5,9.5Zm0-3a1,1,0,1,1,1-1A1,1,0,0,1,4.5,6.5Zm0-3a1,1,0,1,1,1-1A1,1,0,0,1,4.5,3.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'PhoneTelephoneBackCamera2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
