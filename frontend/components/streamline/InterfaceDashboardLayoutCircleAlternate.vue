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
                d="M3.25,6.5A3.25,3.25,0,1,1,6.5,3.25,3.26,3.26,0,0,1,3.25,6.5Zm0-5A1.75,1.75,0,1,0,5,3.25,1.76,1.76,0,0,0,3.25,1.5Z"
            />
            <path
                d="M10.75,6.5A3.25,3.25,0,1,1,14,3.25,3.26,3.26,0,0,1,10.75,6.5Zm0-5A1.75,1.75,0,1,0,12.5,3.25,1.76,1.76,0,0,0,10.75,1.5Z"
            />
            <path
                d="M3.25,14A3.25,3.25,0,1,1,6.5,10.75,3.26,3.26,0,0,1,3.25,14Zm0-5A1.75,1.75,0,1,0,5,10.75,1.76,1.76,0,0,0,3.25,9Z"
            />
            <path
                d="M10.75,14A3.25,3.25,0,1,1,14,10.75,3.26,3.26,0,0,1,10.75,14Zm0-5a1.75,1.75,0,1,0,1.75,1.75A1.76,1.76,0,0,0,10.75,9Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceDashboardLayoutCircleAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
