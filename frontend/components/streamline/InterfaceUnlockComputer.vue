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
                d="M8.5,4.5A1.5,1.5,0,0,0,7,6V8.5A1.5,1.5,0,0,0,8.5,10h4A1.5,1.5,0,0,0,14,8.5V6a1.49,1.49,0,0,0-.64-1.23.25.25,0,0,1-.11-.21V3.75A2.75,2.75,0,0,0,10.5,1a2.7,2.7,0,0,0-1.71.6.21.21,0,0,0-.09.18A.26.26,0,0,0,8.76,2l.7.72a.25.25,0,0,0,.18.08.23.23,0,0,0,.14,0,1.21,1.21,0,0,1,.72-.23,1.25,1.25,0,0,1,1.25,1.25v.5a.25.25,0,0,1-.25.25Z"
            />
            <path
                d="M8.25,12.5H7a.25.25,0,0,1-.25-.25V11l0,0s0,0,0,0A3,3,0,0,1,5.5,8.5V6A3,3,0,0,1,7.65,3.12s0,0,0-.05a.1.1,0,0,0,0-.07,1.41,1.41,0,0,1-.27-.37.26.26,0,0,0-.22-.13H1.75A1.76,1.76,0,0,0,0,4.25v5A1.76,1.76,0,0,0,1.75,11H5a.25.25,0,0,1,.25.25v1A.25.25,0,0,1,5,12.5H3.75a.75.75,0,0,0,0,1.5h4.5a.75.75,0,0,0,0-1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUnlockComputer',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
