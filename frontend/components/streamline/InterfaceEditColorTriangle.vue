<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0Zm3.43,8.72a.58.58,0,0,1-.5.28H4.07a.58.58,0,0,1-.5-.28.52.52,0,0,1,0-.55L6.52,3.75a.59.59,0,0,1,1,0l2.93,4.42A.52.52,0,0,1,10.43,8.72Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditColorTriangle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
