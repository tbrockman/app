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
                d="M14,13a1,1,0,0,0-1-1h-.25a.25.25,0,0,1-.25-.25V8.5A.5.5,0,0,0,12,8H10.5a.5.5,0,0,0-.5.5v3.25a.25.25,0,0,1-.25.25H8.5a.25.25,0,0,1-.25-.25V8.5a.5.5,0,0,0-.5-.5H6.25a.5.5,0,0,0-.5.5v3.25A.25.25,0,0,1,5.5,12H4.25A.25.25,0,0,1,4,11.75V8.5A.5.5,0,0,0,3.5,8H2a.5.5,0,0,0-.5.5v3.25a.25.25,0,0,1-.25.25H1a1,1,0,0,0,0,2H13A1,1,0,0,0,14,13Z"
            />
            <path
                d="M13.57,4.55,7.9.3A1.53,1.53,0,0,0,6.1.3L.43,4.55a1.09,1.09,0,0,0,.65,2H12.92a1.09,1.09,0,0,0,.65-1.95Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MoneyBank',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
