<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,4.24a1.5,1.5,0,0,0-1.5-1.49H6.56a.26.26,0,0,1-.25-.19l-.16-.67A1.51,1.51,0,0,0,4.69.75H1.5A1.5,1.5,0,0,0,0,2.25v9.5a1.5,1.5,0,0,0,1.5,1.5h11a1.5,1.5,0,0,0,1.06-.44A1.52,1.52,0,0,0,14,11.75ZM10.28,7l-3.5,3.5a.74.74,0,0,1-.53.22.73.73,0,0,1-.53-.22L4,8.78A.74.74,0,0,1,4,7.72.75.75,0,0,1,5,7.72l1,1a.24.24,0,0,0,.35,0L9.22,6A.75.75,0,0,1,10.28,7Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFolderCheck',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
