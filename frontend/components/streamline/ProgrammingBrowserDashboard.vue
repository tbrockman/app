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
                d="M12.75,0H1.25A1.25,1.25,0,0,0,0,1.25v11.5A1.25,1.25,0,0,0,1.25,14h11.5A1.25,1.25,0,0,0,14,12.75V1.25A1.25,1.25,0,0,0,12.75,0Zm-11,12.5a.25.25,0,0,1-.25-.25V4.75a.25.25,0,0,1,.25-.25h10.5a.25.25,0,0,1,.25.25v7.5a.25.25,0,0,1-.25.25Z"
            />
            <path
                d="M6.65,10.85a.48.48,0,0,1,0-.7l3-3a.49.49,0,0,1,.7.7l-3,3A.48.48,0,0,1,6.65,10.85Z"
            />
            <path d="M4,11H3a.5.5,0,0,1,0-1H4a.5.5,0,0,1,0,1Z" />
            <path
                d="M4.53,8.73,3.82,8a.48.48,0,0,1,0-.7.5.5,0,0,1,.71,0l.7.71a.49.49,0,0,1-.7.7Z"
            />
            <path
                d="M7,8a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,1,0v1A.5.5,0,0,1,7,8Z"
            />
            <path d="M11,11H10a.5.5,0,0,1,0-1h1a.5.5,0,0,1,0,1Z" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingBrowserDashboard',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
