<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,4.24a1.5,1.5,0,0,0-1.5-1.49H6.56a.26.26,0,0,1-.25-.19l-.16-.67A1.51,1.51,0,0,0,4.69.75H1.5A1.5,1.5,0,0,0,0,2.25v9.5a1.5,1.5,0,0,0,1.5,1.5h11a1.5,1.5,0,0,0,1.06-.44A1.52,1.52,0,0,0,14,11.75ZM10,8.5a.76.76,0,0,1-.75.75H8a.25.25,0,0,0-.25.25v1.25a.75.75,0,0,1-1.5,0V9.5A.25.25,0,0,0,6,9.25H4.75a.75.75,0,0,1,0-1.5H6a.25.25,0,0,0,.25-.25V6.25a.75.75,0,0,1,1.5,0V7.5A.25.25,0,0,0,8,7.75H9.25A.76.76,0,0,1,10,8.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFolderAdd',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
