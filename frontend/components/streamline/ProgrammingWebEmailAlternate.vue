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
                d="M6.5,6h6a2.92,2.92,0,0,1,1.15.24.26.26,0,0,0,.24,0A.25.25,0,0,0,14,6V1a1,1,0,0,0-1-1H1A1,1,0,0,0,0,1V8A1,1,0,0,0,1,9H3.26a.25.25,0,0,0,.25-.23A3,3,0,0,1,6.5,6Zm-3.75.5A.76.76,0,0,1,2,5.75V3.25a.75.75,0,0,1,1.5,0v2.5A.76.76,0,0,1,2.75,6.5Z"
            />
            <path
                d="M14,9a1.5,1.5,0,0,0-1.5-1.5h-6A1.5,1.5,0,0,0,5,9v3.5A1.5,1.5,0,0,0,6.5,14h6A1.5,1.5,0,0,0,14,12.5Zm-.88.08a.75.75,0,0,1-.2,1l-3,2a.74.74,0,0,1-.84,0l-3-2a.75.75,0,1,1,.84-1.24l2.44,1.63a.28.28,0,0,0,.28,0l2.44-1.63A.75.75,0,0,1,13.12,9.08Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingWebEmailAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
