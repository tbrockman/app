<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM9.78,6.78a.75.75,0,0,1-1.06,0l-.54-.54a.26.26,0,0,0-.28-.06.25.25,0,0,0-.15.23V10a.75.75,0,0,1-1.5,0V6.41a.25.25,0,0,0-.15-.23.26.26,0,0,0-.28.06l-.54.54A.75.75,0,0,1,4.22,5.72L6.47,3.47a.75.75,0,0,1,1.06,0L9.78,5.72A.75.75,0,0,1,9.78,6.78Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUploadCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
