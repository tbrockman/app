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
                d="M9.47,9.72,8.18,11a.26.26,0,0,1-.28.06.25.25,0,0,1-.15-.23V7.75a.75.75,0,0,0-1.5,0v3.09a.25.25,0,0,1-.15.23A.26.26,0,0,1,5.82,11L4.53,9.72a.75.75,0,1,0-1.06,1.06l3,3a.75.75,0,0,0,1.06,0l3-3A.75.75,0,0,0,9.47,9.72Z"
            />
            <path
                d="M12.25,0H1.75A1.76,1.76,0,0,0,0,1.75v2A1.76,1.76,0,0,0,1.75,5.5h10.5A1.76,1.76,0,0,0,14,3.75v-2A1.76,1.76,0,0,0,12.25,0Zm.25,3.75a.25.25,0,0,1-.25.25H1.75a.25.25,0,0,1-.25-.25v-2a.25.25,0,0,1,.25-.25h10.5a.25.25,0,0,1,.25.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsMoveDownAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
