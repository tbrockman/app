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
                d="M12.75,0H1.25A1.25,1.25,0,0,0,0,1.25v11.5A1.25,1.25,0,0,0,1.25,14h1.5a.75.75,0,0,0,0-1.5h-1a.25.25,0,0,1-.25-.25V4.75a.25.25,0,0,1,.25-.25h10.5a.25.25,0,0,1,.25.25v7.5a.25.25,0,0,1-.25.25h-1a.75.75,0,0,0,0,1.5h1.5A1.25,1.25,0,0,0,14,12.75V1.25A1.25,1.25,0,0,0,12.75,0Z"
            />
            <path
                d="M6.13,11a.25.25,0,0,0,.25-.25V6.88a.62.62,0,1,1,1.24,0v3.87a.26.26,0,0,0,.26.25h.87a.63.63,0,0,1,.44,1.07L7.44,13.82a.63.63,0,0,1-.88,0L4.81,12.07A.63.63,0,0,1,5.25,11Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceDownloadWebsite',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
