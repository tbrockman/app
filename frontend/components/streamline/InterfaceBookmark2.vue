<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M2.76,14a1.19,1.19,0,0,1-.49-.1,1.23,1.23,0,0,1-.77-1.15V2.25A2.25,2.25,0,0,1,3.75,0h6.5A2.25,2.25,0,0,1,12.5,2.25v10.5a1.25,1.25,0,0,1-2.13.88l-3.2-3a.25.25,0,0,0-.34,0l-3.21,3A1.21,1.21,0,0,1,2.76,14Zm1-12.5A.76.76,0,0,0,3,2.25V11.6a.25.25,0,0,0,.15.23.25.25,0,0,0,.27-.05L6.31,9.09a1,1,0,0,1,1.4,0l2.87,2.68a.25.25,0,0,0,.27.05A.25.25,0,0,0,11,11.6V2.25a.76.76,0,0,0-.75-.75Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceBookmark2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
