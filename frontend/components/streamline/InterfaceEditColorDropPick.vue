<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7.72.3A1.05,1.05,0,0,0,6.28.3c-.49.5-4.78,5-4.78,8.55A5.34,5.34,0,0,0,7,14a5.34,5.34,0,0,0,5.5-5.15C12.5,5.31,8.21.8,7.72.3ZM3.5,8.85C3.5,7.12,5.21,4.64,6.56,3a.22.22,0,0,1,.27-.08A.25.25,0,0,1,7,3.16v8.58a.23.23,0,0,1-.08.18.23.23,0,0,1-.19.07A3.31,3.31,0,0,1,3.5,8.85Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditColorDropPick',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
