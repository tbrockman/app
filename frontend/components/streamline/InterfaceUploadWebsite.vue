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
                d="M5.25,9.25a.63.63,0,0,1-.44-1.07L6.56,6.43a.63.63,0,0,1,.88,0L9.19,8.18a.63.63,0,0,1-.44,1.07H7.88a.26.26,0,0,0-.26.25v3.88a.62.62,0,1,1-1.24,0V9.5a.25.25,0,0,0-.25-.25Z"
            />
            <path
                d="M12.75,0H1.25A1.25,1.25,0,0,0,0,1.25v11.5A1.25,1.25,0,0,0,1.25,14h2.5a.75.75,0,0,0,0-1.5h-2a.25.25,0,0,1-.25-.25V4.75a.25.25,0,0,1,.25-.25h10.5a.25.25,0,0,1,.25.25v7.5a.25.25,0,0,1-.25.25h-2a.75.75,0,0,0,0,1.5h2.5A1.25,1.25,0,0,0,14,12.75V1.25A1.25,1.25,0,0,0,12.75,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUploadWebsite',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
