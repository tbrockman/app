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
                d="M7.64,10.48A2.14,2.14,0,0,0,10.1,9.9l.31-.31a.67.67,0,0,0,.12-.92l-1-1a.67.67,0,0,0-.92.12h0a.67.67,0,0,1-.92.12l-1.6-1.6a.67.67,0,0,1,.12-.92h0a.67.67,0,0,0,.12-.92l-1-1a.67.67,0,0,0-.92.12L4.1,3.9a2.15,2.15,0,0,0-.58,2.46A12,12,0,0,0,7.64,10.48Z"
            />
            <path
                d="M7,14a7,7,0,1,1,7-7A7,7,0,0,1,7,14ZM7,1.5A5.5,5.5,0,1,0,12.5,7,5.51,5.51,0,0,0,7,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'PhoneTelephoneCircleAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
