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
                d="M3.22,10.78a.75.75,0,0,1,0-1.06l1-1a.25.25,0,0,0,0-.36l-1-1A.75.75,0,1,1,4.28,6.22L6,8A.75.75,0,0,1,6,9L4.28,10.78A.75.75,0,0,1,3.22,10.78Z"
            />
            <path
                d="M10.25,9.25H8.5a.75.75,0,0,1,0-1.5h1.75a.75.75,0,0,1,0,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingBrowserCode1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
