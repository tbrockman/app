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
                d="M8.76,4A.75.75,0,0,1,8.8,5l-3,3.25a.75.75,0,0,1-.55.24.78.78,0,0,1-.48-.17L3.27,7.08a.75.75,0,1,1,1-1.16L5,6.57a.25.25,0,0,0,.34,0L7.7,4A.75.75,0,0,1,8.76,4Z"
            />
            <path d="M10.25,9.5h-2a.75.75,0,0,1,0-1.5h2a.75.75,0,0,1,0,1.5Z" />
            <path
                d="M11.25,14H2.75A2.75,2.75,0,0,1,0,11.25V2.75A2.75,2.75,0,0,1,2.75,0h8.5A2.75,2.75,0,0,1,14,2.75v8.5A2.75,2.75,0,0,1,11.25,14ZM2.75,1.5A1.25,1.25,0,0,0,1.5,2.75v8.5A1.25,1.25,0,0,0,2.75,12.5h8.5a1.25,1.25,0,0,0,1.25-1.25V2.75A1.25,1.25,0,0,0,11.25,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceValidationCheckSquare2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
