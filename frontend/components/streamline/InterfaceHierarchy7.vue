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
                d="M4,3.5A2,2,0,1,0,1.11,5.29a.24.24,0,0,1,.14.23V10a.24.24,0,0,1-.14.23,2,2,0,1,0,1.78,0A.24.24,0,0,1,2.75,10V5.52a.24.24,0,0,1,.14-.23A2,2,0,0,0,4,3.5Z"
            />
            <path
                d="M12.89,10.21a.24.24,0,0,1-.14-.23V5.5A2.75,2.75,0,0,0,10,2.75H8.66a.25.25,0,0,1-.23-.15.26.26,0,0,1,.06-.28l1-1A.75.75,0,0,0,8.47.22L5.72,3A.75.75,0,0,0,5.72,4L8.47,6.78a.75.75,0,0,0,1.06,0,.75.75,0,0,0,0-1.06l-1-1a.26.26,0,0,1-.06-.28.25.25,0,0,1,.23-.15H10A1.25,1.25,0,0,1,11.25,5.5V10a.24.24,0,0,1-.14.23,2,2,0,1,0,1.78,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceHierarchy7',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
