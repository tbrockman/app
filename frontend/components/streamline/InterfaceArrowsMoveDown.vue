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
                d="M9.72,9.47,8.18,11a.26.26,0,0,1-.28.06.25.25,0,0,1-.15-.23V6.25a.75.75,0,0,0-1.5,0v4.59a.25.25,0,0,1-.15.23A.26.26,0,0,1,5.82,11L4.28,9.47a.75.75,0,1,0-1.06,1.06l3.25,3.25a.75.75,0,0,0,1.06,0l3.25-3.25A.75.75,0,0,0,9.72,9.47Z"
            />
            <rect width="14" height="4" rx="1" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsMoveDown',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
