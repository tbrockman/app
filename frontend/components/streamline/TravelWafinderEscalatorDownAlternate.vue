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
                d="M.46,5.44a.72.72,0,0,0,.29.06h2.5a.75.75,0,0,0,0-1.5H3.16a.25.25,0,0,1-.23-.15A.26.26,0,0,1,3,3.57L5.28,1.28A.75.75,0,0,0,4.22.22L1.93,2.51a.26.26,0,0,1-.28.06.25.25,0,0,1-.15-.23V2.25A.76.76,0,0,0,.75,1.5.76.76,0,0,0,0,2.25v2.5A.75.75,0,0,0,.06,5,.71.71,0,0,0,.46,5.44Z"
            />
            <path
                d="M14,5.25A2.75,2.75,0,0,0,11.25,2.5H9.44a2.76,2.76,0,0,0-2.12,1L3.22,8.41A.22.22,0,0,1,3,8.5H2.75a2.75,2.75,0,0,0,0,5.5H4.56a2.76,2.76,0,0,0,2.12-1l4.1-4.92A.22.22,0,0,1,11,8h.28A2.75,2.75,0,0,0,14,5.25Zm-1.5,0A1.25,1.25,0,0,1,11.25,6.5H10.5a.78.78,0,0,0-.58.27l-4.4,5.28a1.21,1.21,0,0,1-1,.45H2.75a1.25,1.25,0,0,1,0-2.5H3.5a.78.78,0,0,0,.58-.27l4.4-5.28a1.21,1.21,0,0,1,1-.45h1.81A1.25,1.25,0,0,1,12.5,5.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelWafinderEscalatorDownAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
