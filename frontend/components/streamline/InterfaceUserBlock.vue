<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="4.75" cy="2.75" r="2.75" />
            <path
                d="M5,10.25A5.28,5.28,0,0,1,5.55,7.9a.24.24,0,0,0,0-.23.26.26,0,0,0-.19-.13l-.14,0A4.75,4.75,0,0,0,0,12.25V13a1,1,0,0,0,1,1H6a.26.26,0,0,0,.22-.14.24.24,0,0,0,0-.27A5.23,5.23,0,0,1,5,10.25Z"
            />
            <path
                d="M10.25,6.5A3.75,3.75,0,1,0,14,10.25,3.75,3.75,0,0,0,10.25,6.5Zm0,1.5a2.27,2.27,0,0,1,1.09.28L8.28,11.34a2.25,2.25,0,0,1,2-3.34Zm0,4.5a2.27,2.27,0,0,1-1.09-.28l3.06-3.06a2.25,2.25,0,0,1-2,3.34Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUserBlock',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
