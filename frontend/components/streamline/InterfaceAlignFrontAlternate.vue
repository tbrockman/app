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
                d="M11.5,14H6a2.5,2.5,0,0,1-2.5-2.5V6A2.5,2.5,0,0,1,6,3.5h5.5A2.5,2.5,0,0,1,14,6v5.5A2.5,2.5,0,0,1,11.5,14ZM6,5.5a.5.5,0,0,0-.5.5v5.5A.5.5,0,0,0,6,12h5.5a.5.5,0,0,0,.5-.5V6a.5.5,0,0,0-.5-.5Z"
            />
            <path
                d="M2,0H9A1,1,0,0,1,9,2H2.5a.5.5,0,0,0-.5.5V9A1,1,0,0,1,0,9V2A2,2,0,0,1,2,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAlignFrontAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
