<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12,1.75A1.76,1.76,0,0,0,10.25,0H10.2A.26.26,0,0,0,10,.19L9.69,1.24a1,1,0,0,1-1,.76H5.28a1,1,0,0,1-1-.76l-.26-1A.26.26,0,0,0,3.8,0h0A1.76,1.76,0,0,0,2,1.75v10.5A1.76,1.76,0,0,0,3.75,14h6.5A1.76,1.76,0,0,0,12,12.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'PhoneTelephoneIphone',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
