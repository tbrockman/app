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
                d="M4.53,4.28,5.82,3a.26.26,0,0,1,.28-.06.25.25,0,0,1,.15.23V6.25a.75.75,0,0,0,1.5,0V3.16a.25.25,0,0,1,.15-.23A.26.26,0,0,1,8.18,3L9.47,4.28a.75.75,0,0,0,1.06,0,.75.75,0,0,0,0-1.06l-3-3a.75.75,0,0,0-1.06,0l-3,3A.75.75,0,0,0,4.53,4.28Z"
            />
            <path
                d="M14,10.25A1.76,1.76,0,0,0,12.25,8.5H1.75A1.76,1.76,0,0,0,0,10.25v2A1.76,1.76,0,0,0,1.75,14h10.5A1.76,1.76,0,0,0,14,12.25Zm-1.5,2a.25.25,0,0,1-.25.25H1.75a.25.25,0,0,1-.25-.25v-2A.25.25,0,0,1,1.75,10h10.5a.25.25,0,0,1,.25.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsMoveUpAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
