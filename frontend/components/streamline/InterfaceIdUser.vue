<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="7" cy="4.5" r="2" />
            <path
                d="M3.52,10.68c-.52,0-.54-.63-.36-1a4.25,4.25,0,0,1,7.68,0c.18.37.13,1-.36,1Z"
            />
            <path
                d="M1,4.5a1,1,0,0,1-1-1V2A2,2,0,0,1,2,0H3.5a1,1,0,0,1,0,2H2.25A.25.25,0,0,0,2,2.25V3.5A1,1,0,0,1,1,4.5Z"
            />
            <path
                d="M13,4.5a1,1,0,0,1-1-1V2.25A.25.25,0,0,0,11.75,2H10.5a1,1,0,0,1,0-2H12a2,2,0,0,1,2,2V3.5A1,1,0,0,1,13,4.5Z"
            />
            <path
                d="M3.5,14H2a2,2,0,0,1-2-2V10.5a1,1,0,0,1,2,0v1.25a.25.25,0,0,0,.25.25H3.5a1,1,0,0,1,0,2Z"
            />
            <path
                d="M14,12a2,2,0,0,1-2,2H10.5a1,1,0,0,1,0-2h1.25a.25.25,0,0,0,.25-.25V10.5a1,1,0,0,1,2,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceIdUser',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
