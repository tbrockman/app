<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10.5,0h-7A3.5,3.5,0,0,0,0,3.5v7A3.5,3.5,0,0,0,3.5,14h7A3.5,3.5,0,0,0,14,10.5v-7A3.5,3.5,0,0,0,10.5,0ZM4,4.5H7.59a.25.25,0,0,0,.23-.15.26.26,0,0,0-.06-.28l-.29-.29A.75.75,0,0,1,8.53,2.72l2,2a.75.75,0,0,1,.16.82A.74.74,0,0,1,10,6H4A.75.75,0,0,1,4,4.5Zm6,5H6.41a.25.25,0,0,0-.23.15.26.26,0,0,0,.06.28l.29.29a.75.75,0,0,1,0,1.06.75.75,0,0,1-1.06,0l-2-2a.75.75,0,0,1-.16-.82A.74.74,0,0,1,4,8h6a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsDataTransferHorizontal',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
