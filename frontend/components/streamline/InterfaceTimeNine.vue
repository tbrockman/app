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
                d="M7,0a.5.5,0,0,0-.5.5V6.25a.25.25,0,0,1-.25.25H.5A.5.5,0,0,0,0,7,7,7,0,1,0,7,0Z"
            />
            <path
                d="M3.18,4.24,2.12,3.18A.75.75,0,0,1,3.18,2.12L4.24,3.18A.75.75,0,0,1,3.18,4.24Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTimeNine',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
