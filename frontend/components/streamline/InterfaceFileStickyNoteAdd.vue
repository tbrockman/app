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
                d="M14,2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V12a2,2,0,0,0,2,2H9a1,1,0,0,0,.71-.29l4-4A1,1,0,0,0,14,9ZM2,2.25A.25.25,0,0,1,2.25,2h9.5a.25.25,0,0,1,.25.25v5.5a.25.25,0,0,1-.25.25H9.5A1.5,1.5,0,0,0,8,9.5v2.25a.25.25,0,0,1-.25.25H2.25A.25.25,0,0,1,2,11.75Z"
            />
            <path
                d="M7.75,5h-1a.25.25,0,0,1-.25-.25v-1a.75.75,0,0,0-1.5,0v1A.25.25,0,0,1,4.75,5h-1a.75.75,0,0,0,0,1.5h1A.25.25,0,0,1,5,6.75v1a.75.75,0,0,0,1.5,0v-1a.25.25,0,0,1,.25-.25h1a.75.75,0,0,0,0-1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFileStickyNoteAdd',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
