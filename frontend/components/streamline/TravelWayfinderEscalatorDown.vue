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
                d="M14,6a2,2,0,0,0-2-2H8.94a2,2,0,0,0-1.54.72L3.07,9.91a.22.22,0,0,1-.19.09H2a2,2,0,0,0,0,4H4.06a2,2,0,0,0,1.54-.72L9.93,8.09A.22.22,0,0,1,10.12,8H12A2,2,0,0,0,14,6Z"
            />
            <path
                d="M.46,5.44a.72.72,0,0,0,.29.06h2.5a.75.75,0,0,0,0-1.5H3.16a.25.25,0,0,1-.23-.15A.26.26,0,0,1,3,3.57L5.28,1.28A.75.75,0,0,0,4.22.22L1.93,2.51a.26.26,0,0,1-.28.06.25.25,0,0,1-.15-.23V2.25A.76.76,0,0,0,.75,1.5.76.76,0,0,0,0,2.25v2.5A.75.75,0,0,0,.06,5,.71.71,0,0,0,.46,5.44Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderEscalatorDown',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
