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
                d="M7,14a1.12,1.12,0,0,1-.79-.33L2.73,10.29a.75.75,0,0,1,1-1.08l3.06,3a.26.26,0,0,0,.35,0l3.05-3a.75.75,0,1,1,1,1.08L7.78,13.68A1.1,1.1,0,0,1,7,14Z"
            />
            <path
                d="M3.25,5a.76.76,0,0,1-.54-.23.75.75,0,0,1,0-1.06L6.22.32a1.11,1.11,0,0,1,1.57,0l3.48,3.38a.75.75,0,0,1-1,1.08l-3.05-3a.26.26,0,0,0-.35,0l-3.06,3A.73.73,0,0,1,3.25,5Z"
            />
            <circle cx="7" cy="7" r="1.5" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsVerticalScrollPoint',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
