<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11,8H7.75V6H9.5A1.5,1.5,0,0,0,11,4.5v-1A1.5,1.5,0,0,0,9.5,2H7.75V.75a.75.75,0,0,0-1.5,0V2H4.5A1.5,1.5,0,0,0,3,3.5v1A1.5,1.5,0,0,0,4.5,6H6.25V8H3A1.5,1.5,0,0,0,1.5,9.5v1A1.5,1.5,0,0,0,3,12H6.25v1.25a.75.75,0,0,0,1.5,0V12H11a1.5,1.5,0,0,0,1.5-1.5v-1A1.5,1.5,0,0,0,11,8Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAlignHorizontalCenter',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
