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
                d="M7.8,8.16a.27.27,0,0,0,.07-.24.26.26,0,0,0-.16-.18A2.08,2.08,0,0,0,7,7.62,2.14,2.14,0,0,0,4.87,9.75a2.08,2.08,0,0,0,.12.71.26.26,0,0,0,.18.16.27.27,0,0,0,.24-.07Z"
            />
            <path
                d="M6.2,11.34a.27.27,0,0,0-.07.24.26.26,0,0,0,.16.18,2.08,2.08,0,0,0,.71.12A2.14,2.14,0,0,0,9.13,9.75,2.08,2.08,0,0,0,9,9a.26.26,0,0,0-.18-.16A.27.27,0,0,0,8.59,9Z"
            />
            <path
                d="M14,3.25A1.76,1.76,0,0,0,12.25,1.5H11a.25.25,0,0,1-.25-.25V.75a.75.75,0,0,0-1.5,0v.5A.25.25,0,0,1,9,1.5H5a.25.25,0,0,1-.25-.25V.75a.75.75,0,0,0-1.5,0v.5A.25.25,0,0,1,3,1.5H1.75A1.76,1.76,0,0,0,0,3.25v9A1.76,1.76,0,0,0,1.75,14h10.5A1.76,1.76,0,0,0,14,12.25ZM7,13a3.25,3.25,0,1,1,3.25-3.25A3.26,3.26,0,0,1,7,13Zm5.5-7.75a.25.25,0,0,1-.25.25H1.75a.25.25,0,0,1-.25-.25v-2A.25.25,0,0,1,1.75,3H3a.25.25,0,0,1,.25.25v.5a.75.75,0,0,0,1.5,0v-.5A.25.25,0,0,1,5,3H9a.25.25,0,0,1,.25.25v.5a.75.75,0,0,0,1.5,0v-.5A.25.25,0,0,1,11,3h1.25a.25.25,0,0,1,.25.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceCalendarBlock',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
