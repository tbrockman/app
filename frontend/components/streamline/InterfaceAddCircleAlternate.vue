<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path
                d="M10,8H8.25A.25.25,0,0,0,8,8.25V10a1,1,0,0,1-2,0V8.25A.25.25,0,0,0,5.75,8H4A1,1,0,0,1,4,6H5.75A.25.25,0,0,0,6,5.75V4A1,1,0,0,1,8,4V5.75A.25.25,0,0,0,8.25,6H10a1,1,0,0,1,0,2Z"
            />
            <path
                d="M7,14a7,7,0,1,1,7-7A7,7,0,0,1,7,14ZM7,1.5A5.5,5.5,0,1,0,12.5,7,5.51,5.51,0,0,0,7,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAddCircleAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
