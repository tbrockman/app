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
                d="M14,9.25a1.5,1.5,0,0,0-1.5-1.5h-3a.5.5,0,0,0-.5.5V9a.25.25,0,0,1-.25.25H5.25A.25.25,0,0,1,5,9V8.25a.5.5,0,0,0-.5-.5h-3A1.5,1.5,0,0,0,0,9.25v3a1.5,1.5,0,0,0,1.5,1.5h11a1.5,1.5,0,0,0,1.5-1.5Z"
            />
            <path
                d="M1,5.25a1,1,0,0,0,1,1H12a1,1,0,0,0,0-2H2A1,1,0,0,0,1,5.25Z"
            />
            <path
                d="M1,1.25a1,1,0,0,0,1,1H12a1,1,0,0,0,0-2H2A1,1,0,0,0,1,1.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceContentArchiveFolder',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
