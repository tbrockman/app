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
                d="M12.25,0A1.76,1.76,0,0,1,14,1.75v8a.75.75,0,0,1-1.5,0v-8a.25.25,0,0,0-.25-.25h-8A.76.76,0,0,1,3.5.75.76.76,0,0,1,4.25,0Z"
            />
            <path
                d="M1.5,3.5A1.5,1.5,0,0,0,0,5v7.5A1.5,1.5,0,0,0,1.5,14H9a1.5,1.5,0,0,0,1.5-1.5V5A1.5,1.5,0,0,0,9,3.5ZM6,6.5V7.75A.25.25,0,0,0,6.25,8H7.5a.75.75,0,0,1,0,1.5H6.25A.25.25,0,0,0,6,9.75V11a.75.75,0,0,1-1.5,0V9.75a.25.25,0,0,0-.25-.25H3A.75.75,0,0,1,3,8H4.25a.25.25,0,0,0,.25-.25V6.5A.75.75,0,0,1,6,6.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditLayerAdd2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
