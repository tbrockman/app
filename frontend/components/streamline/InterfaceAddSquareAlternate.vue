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
                d="M14,11.25A2.75,2.75,0,0,1,11.25,14H2.75A2.75,2.75,0,0,1,0,11.25V2.75A2.75,2.75,0,0,1,2.75,0h8.5A2.75,2.75,0,0,1,14,2.75ZM2.75,1.5A1.25,1.25,0,0,0,1.5,2.75v8.5A1.25,1.25,0,0,0,2.75,12.5h8.5a1.25,1.25,0,0,0,1.25-1.25V2.75A1.25,1.25,0,0,0,11.25,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAddSquareAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
