<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM5.5,6.25H5a.25.25,0,0,0-.25.25v2a.75.75,0,0,1-1.5,0v-2A.25.25,0,0,0,3,6.25H2.5a.75.75,0,0,1,0-1.5h3a.75.75,0,0,1,0,1.5ZM11.75,8.5a.75.75,0,0,1-1.5,0V7.3a.21.21,0,0,0-.11-.19.24.24,0,0,0-.22,0,.76.76,0,0,1-.84,0,.24.24,0,0,0-.22,0,.21.21,0,0,0-.11.19V8.5a.75.75,0,0,1-1.5,0v-3a.75.75,0,0,1,1.17-.62l.94.63a.28.28,0,0,0,.28,0l.94-.63a.75.75,0,0,1,1.17.62Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceContentTrademark',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
