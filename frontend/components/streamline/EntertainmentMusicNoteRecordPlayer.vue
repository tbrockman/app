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
                d="M10,5.3a5.5,5.5,0,1,0-.14,6.62.23.23,0,0,0,0-.27.26.26,0,0,0-.24-.13H9.5A2.25,2.25,0,0,1,8.42,7.3l1.45-.79A.26.26,0,0,0,10,6.29V5.45A.25.25,0,0,0,10,5.3ZM5.5,9.77A1.25,1.25,0,1,1,6.75,8.52,1.25,1.25,0,0,1,5.5,9.77Z"
            />
            <path
                d="M14,.52a.5.5,0,0,0-.5-.5H11a.5.5,0,0,0-.5.5v3A.5.5,0,0,0,11,4h.25a.25.25,0,0,1,.25.25V7.18a.26.26,0,0,1-.13.22L9.14,8.61A.75.75,0,0,0,9.5,10a.77.77,0,0,0,.36-.09l2.75-1.5A.75.75,0,0,0,13,7.77V4.27A.25.25,0,0,1,13.25,4h.25a.5.5,0,0,0,.5-.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentMusicNoteRecordPlayer',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
