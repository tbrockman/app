<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10.25,0a1,1,0,0,0-.94.61L7.74,3.88A.24.24,0,0,1,7.56,4l-3.41.52a1,1,0,0,0-.84.71,1.08,1.08,0,0,0,.25,1.11L6.06,9a.25.25,0,0,1,.06.22l-.58,3.57A1.07,1.07,0,0,0,6,13.81a1,1,0,0,0,1.09.06c3.91-2.15,3.68-1.9,3.68-2.25V.5A.5.5,0,0,0,10.25,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAwardHalfStar',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
