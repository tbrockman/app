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
                d="M4.56,12.29a2.52,2.52,0,0,1,.22-.69L7.59,6a2.69,2.69,0,0,1,4.82,0L13.52,8.2a.23.23,0,0,0,.28.13A.24.24,0,0,0,14,8.09l0-4.6A1.5,1.5,0,0,0,12.47,2H6.56a.26.26,0,0,1-.25-.19l-.16-.67A1.51,1.51,0,0,0,4.69,0H1.5A1.5,1.5,0,0,0,0,1.5V11a1.5,1.5,0,0,0,1.5,1.5H4.32A.25.25,0,0,0,4.56,12.29Z"
            />
            <path
                d="M12.8,14a1.19,1.19,0,0,0,1.07-1.73l-2.8-5.61a1.2,1.2,0,0,0-2.14,0L6.12,12.27a1.2,1.2,0,0,0,.06,1.16,1.17,1.17,0,0,0,1,.57Zm-2.05-2.5a.75.75,0,0,1-1.5,0V10a.75.75,0,0,1,1.5,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingBugThreatFolderAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
