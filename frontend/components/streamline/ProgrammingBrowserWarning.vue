<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="7" cy="13" r="1" />
            <path d="M7,6A1,1,0,0,0,6,7v3a1,1,0,0,0,2,0V7A1,1,0,0,0,7,6Z" />
            <path
                d="M12.75,0H1.25A1.25,1.25,0,0,0,0,1.25v11.5A1.25,1.25,0,0,0,1.25,14h2.5a.75.75,0,0,0,0-1.5h-2a.25.25,0,0,1-.25-.25V4.75a.25.25,0,0,1,.25-.25h10.5a.25.25,0,0,1,.25.25v7.5a.25.25,0,0,1-.25.25h-2a.75.75,0,0,0,0,1.5h2.5A1.25,1.25,0,0,0,14,12.75V1.25A1.25,1.25,0,0,0,12.75,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingBrowserWarning',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
