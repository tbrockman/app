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
                d="M12.89,9.21A.24.24,0,0,1,12.75,9V5A2.75,2.75,0,0,0,10,2.25H8.66a.25.25,0,0,1-.23-.15.26.26,0,0,1,.06-.28L9,1.28A.75.75,0,1,0,8,.22L5.72,2.47a.75.75,0,0,0,0,1.06L8,5.78A.75.75,0,0,0,9,5.78.75.75,0,0,0,9,4.72l-.54-.54a.26.26,0,0,1-.06-.28.25.25,0,0,1,.23-.15H10A1.25,1.25,0,0,1,11.25,5V9a.24.24,0,0,1-.14.23,2,2,0,1,0,1.78,0Z"
            />
            <path
                d="M6,8.22A.75.75,0,0,0,5,9.28l.54.54a.26.26,0,0,1,.06.28.25.25,0,0,1-.23.15H4A1.25,1.25,0,0,1,2.75,9V5a.24.24,0,0,1,.14-.23,2,2,0,1,0-1.78,0A.24.24,0,0,1,1.25,5V9A2.75,2.75,0,0,0,4,11.75H5.34a.25.25,0,0,1,.23.15.26.26,0,0,1-.06.28L5,12.72a.75.75,0,0,0,0,1.06.75.75,0,0,0,1.06,0l2.25-2.25a.75.75,0,0,0,0-1.06Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceHierarchy8',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
