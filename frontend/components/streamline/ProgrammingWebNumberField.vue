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
                d="M14,3.75A1.76,1.76,0,0,0,12.25,2H1.75A1.76,1.76,0,0,0,0,3.75v6.5A1.76,1.76,0,0,0,1.75,12h10.5A1.76,1.76,0,0,0,14,10.25Zm-1.5,6.5a.25.25,0,0,1-.25.25H1.75a.25.25,0,0,1-.25-.25V3.75a.25.25,0,0,1,.25-.25h10.5a.25.25,0,0,1,.25.25Z"
            />
            <path d="M10,7.88H8A.62.62,0,1,0,8,9.12h2a.62.62,0,0,0,0-1.24Z" />
            <path
                d="M5.5,7.88H5.38a.26.26,0,0,1-.26-.26V5.5a.62.62,0,0,0-.62-.62h-1a.62.62,0,0,0,0,1.24h.12a.26.26,0,0,1,.26.26V7.62a.26.26,0,0,1-.26.26H3.5a.62.62,0,1,0,0,1.24h2a.62.62,0,1,0,0-1.24Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingWebNumberField',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
