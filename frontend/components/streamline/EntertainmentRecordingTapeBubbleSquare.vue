<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="4.75" cy="6.5" r="0.75" />
            <circle cx="10.25" cy="6.5" r="0.75" />
            <path
                d="M14,1.25A1.25,1.25,0,0,0,12.75,0H2.25A1.25,1.25,0,0,0,1,1.25v9.11a.29.29,0,0,1,0,.09L.05,13a.75.75,0,0,0,.15.77A.72.72,0,0,0,.94,14l3.6-1h8.21A1.25,1.25,0,0,0,14,11.75Zm-3.75,7.5H4.75A2.25,2.25,0,1,1,7,6.5,2.3,2.3,0,0,1,7,7a.23.23,0,0,0,0,.21.25.25,0,0,0,.19.09h.62A.25.25,0,0,0,8,7.16.23.23,0,0,0,8.05,7,2.3,2.3,0,0,1,8,6.5a2.25,2.25,0,1,1,2.25,2.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentRecordingTapeBubbleSquare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
