<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10.5,0h-7A1.5,1.5,0,0,0,2,1.5v11A1.5,1.5,0,0,0,3.5,14h7A1.5,1.5,0,0,0,12,12.5V1.5A1.5,1.5,0,0,0,10.5,0ZM9.25,3.5H4.75a.75.75,0,0,1,0-1.5h4.5a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditAlignTopVertical',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
