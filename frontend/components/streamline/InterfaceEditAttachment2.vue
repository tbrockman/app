<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M5.5,14H5a2.25,2.25,0,0,1-2.25-2.25V3.25A3.26,3.26,0,0,1,6,0H8a3.26,3.26,0,0,1,3.25,3.25v8a.75.75,0,0,1-1.5,0v-8A1.76,1.76,0,0,0,8,1.5H6A1.76,1.76,0,0,0,4.25,3.25v8.5A.76.76,0,0,0,5,12.5h.5a.76.76,0,0,0,.75-.75v-7a.75.75,0,0,1,1.5,0v7A2.25,2.25,0,0,1,5.5,14Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditAttachment2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
