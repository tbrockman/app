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
                d="M4,6.75A.76.76,0,0,1,3.25,6V4.5a.75.75,0,0,1,1.5,0V6A.76.76,0,0,1,4,6.75Z"
            />
            <path
                d="M10,6.75A.76.76,0,0,1,9.25,6V4.5a.75.75,0,0,1,1.5,0V6A.76.76,0,0,1,10,6.75Z"
            />
            <path
                d="M7.75,7.5A.76.76,0,0,1,7,8.25H6a.75.75,0,0,1,0-1.5.25.25,0,0,0,.25-.25v-1a.75.75,0,0,1,1.5,0Z"
            />
            <path
                d="M7,11.5a4.78,4.78,0,0,1-3-1.16A.75.75,0,0,1,5,9.16,2.89,2.89,0,0,0,9,9.16.75.75,0,0,1,10,10.34,4.78,4.78,0,0,1,7,11.5Z"
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
    name: 'InterfaceIdFaceScan2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
