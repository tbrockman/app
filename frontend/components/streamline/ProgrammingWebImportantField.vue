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
                d="M12.25,6h-7A1.76,1.76,0,0,1,3.5,4.25V1.75A1.76,1.76,0,0,1,5.25,0h7A1.76,1.76,0,0,1,14,1.75v2.5A1.76,1.76,0,0,1,12.25,6Zm-7-4.5A.25.25,0,0,0,5,1.75v2.5a.25.25,0,0,0,.25.25h7a.25.25,0,0,0,.25-.25V1.75a.25.25,0,0,0-.25-.25Z"
            />
            <path
                d="M12.25,14h-7A1.76,1.76,0,0,1,3.5,12.25V9.75A1.76,1.76,0,0,1,5.25,8h7A1.76,1.76,0,0,1,14,9.75v2.5A1.76,1.76,0,0,1,12.25,14Zm-7-4.5A.25.25,0,0,0,5,9.75v2.5a.25.25,0,0,0,.25.25h7a.25.25,0,0,0,.25-.25V9.75a.25.25,0,0,0-.25-.25Z"
            />
            <circle cx="1" cy="1" r="1" />
            <circle cx="1" cy="9" r="1" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingWebImportantField',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
