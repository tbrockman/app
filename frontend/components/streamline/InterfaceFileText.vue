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
                d="M11.25,14H2.75A1.76,1.76,0,0,1,1,12.25V1.75A1.76,1.76,0,0,1,2.75,0h4.5a.75.75,0,0,1,.53.22l5,5a.75.75,0,0,1,.22.53v6.5A1.76,1.76,0,0,1,11.25,14ZM2.75,1.5a.25.25,0,0,0-.25.25v10.5a.25.25,0,0,0,.25.25h8.5a.25.25,0,0,0,.25-.25V6.16A.26.26,0,0,0,11.43,6L7,1.57a.26.26,0,0,0-.17-.07Z"
            />
            <path
                d="M6.5,4.88H4.75a.63.63,0,0,1,0-1.26H6.5a.63.63,0,0,1,0,1.26Z"
            />
            <path
                d="M9.25,7.88H4.75a.63.63,0,0,1,0-1.26h4.5a.63.63,0,0,1,0,1.26Z"
            />
            <path
                d="M9.25,10.88H4.75a.63.63,0,0,1,0-1.26h4.5a.63.63,0,0,1,0,1.26Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFileText',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
