<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.25,11a.76.76,0,0,0-.75.75.75.75,0,0,1-1.5,0V3.5a3.5,3.5,0,0,0-7,0V8.43a.26.26,0,0,1-.11.21.3.3,0,0,1-.23,0,2.49,2.49,0,0,0-.91-.17A2.75,2.75,0,1,0,5.5,11.25V3.5a2,2,0,0,1,4,0v8.25a2.25,2.25,0,0,0,4.5,0A.76.76,0,0,0,13.25,11ZM2.75,12.5A1.25,1.25,0,1,1,4,11.25,1.25,1.25,0,0,1,2.75,12.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EcologyScienceZodiac3',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
