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
                d="M5.5,5.5a6.32,6.32,0,0,1,5.28,3.23.49.49,0,0,0,.44.27h2.19a.52.52,0,0,0,.37-.16.52.52,0,0,0,.13-.39C13.3,1.91,9.87.13,9.72.05a.49.49,0,0,0-.59.12l-4,4.5A.49.49,0,0,0,5,5.2.51.51,0,0,0,5.5,5.5Z"
            />
            <path
                d="M13.5,10.5H1.5A1.5,1.5,0,0,0,0,12v.5A1.5,1.5,0,0,0,1.5,14h11A1.5,1.5,0,0,0,14,12.5V11A.5.5,0,0,0,13.5,10.5Z"
            />
            <path d="M.75,9h6a.75.75,0,0,0,0-1.5h-6A.75.75,0,0,0,.75,9Z" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentMusicNoteGramophone',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
