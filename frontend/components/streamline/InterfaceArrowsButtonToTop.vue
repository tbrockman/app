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
                d="M13.71,8.6a1,1,0,0,1-1.42,0L7.18,3.49a.25.25,0,0,0-.36,0L1.71,8.6a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.41L5.94,1.54a1.51,1.51,0,0,1,2.12,0l5.65,5.65A1,1,0,0,1,13.71,8.6Z"
            />
            <path d="M13,12.9H1a1,1,0,0,1,0-2H13a1,1,0,0,1,0,2Z" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsButtonToTop',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
