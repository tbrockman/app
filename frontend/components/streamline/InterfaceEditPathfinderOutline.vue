<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,5.5A1.5,1.5,0,0,0,12.5,4H10.25A.25.25,0,0,1,10,3.75V1.5A1.5,1.5,0,0,0,8.5,0h-7A1.5,1.5,0,0,0,0,1.5v7A1.5,1.5,0,0,0,1.5,10H3.75a.25.25,0,0,1,.25.25V12.5A1.5,1.5,0,0,0,5.5,14h7A1.5,1.5,0,0,0,14,12.5ZM9,8A1,1,0,0,1,8,9H5.25A.25.25,0,0,1,5,8.75V6A1,1,0,0,1,6,5H8.75A.25.25,0,0,1,9,5.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditPathfinderOutline',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
