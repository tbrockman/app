<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM8.13,7.7A.25.25,0,0,0,8,7.92V10a1,1,0,0,1-2,0V7.91a.26.26,0,0,0-.12-.21,2.25,2.25,0,1,1,2.25,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceLockCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
