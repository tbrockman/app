<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,10.5A2.5,2.5,0,0,1,11.5,13h-9A2.5,2.5,0,0,1,0,10.5v-7A2.5,2.5,0,0,1,2.5,1H5.56a1,1,0,0,1,.86.5l1.16,2H11.5A2.5,2.5,0,0,1,14,6ZM2.5,3a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5V6a.5.5,0,0,0-.5-.5H7A1,1,0,0,1,6.13,5L5,3Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceContentFolderAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
