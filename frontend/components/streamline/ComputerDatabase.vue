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
                d="M7,10.5A11.61,11.61,0,0,1,.39,8.79a.23.23,0,0,0-.25,0A.23.23,0,0,0,0,9v1.5c0,2,3,3.5,7,3.5s7-1.5,7-3.5V9a.23.23,0,0,0-.14-.22.23.23,0,0,0-.25,0A11.61,11.61,0,0,1,7,10.5Z"
            />
            <path
                d="M7,0C3,0,0,1.5,0,3.5v2C0,7.5,3,9,7,9s7-1.5,7-3.5v-2C14,1.5,11,0,7,0ZM7,1.5c3.36,0,5.5,1.18,5.5,2s-2.14,2-5.5,2-5.5-1.18-5.5-2S3.64,1.5,7,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ComputerDatabase',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
