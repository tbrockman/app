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
                d="M14,1.25A1.25,1.25,0,0,0,12.75,0H1.25A1.25,1.25,0,0,0,0,1.25v11.5A1.25,1.25,0,0,0,1.25,14h11.5A1.25,1.25,0,0,0,14,12.75Zm-1.5,11a.25.25,0,0,1-.25.25H1.75a.25.25,0,0,1-.25-.25V4.75a.25.25,0,0,1,.25-.25h10.5a.25.25,0,0,1,.25.25Z"
            />
            <path
                d="M9.27,6.23a.75.75,0,0,0-1.06,0l-1,1a.25.25,0,0,1-.36,0l-1-1A.75.75,0,1,0,4.73,7.29l1,1a.25.25,0,0,1,0,.36l-1,1a.75.75,0,1,0,1.06,1.06l1-1a.25.25,0,0,1,.36,0l1,1A.75.75,0,0,0,9.27,9.71l-1-1a.25.25,0,0,1,0-.36l1-1A.75.75,0,0,0,9.27,6.23Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingBrowserDelete',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
