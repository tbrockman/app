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
                d="M6.6,13a1.92,1.92,0,0,1-1.15-.39c-.06,0,.14.17-2.33-2.53A.25.25,0,0,0,2.93,10H2.28A2.28,2.28,0,0,1,0,7.71V6.28A2.29,2.29,0,0,1,2.28,4h.65a.27.27,0,0,0,.19-.08C5.59,1.23,5.39,1.44,5.45,1.39A1.92,1.92,0,0,1,6.6,1,1.9,1.9,0,0,1,8.5,2.9v8.2A1.9,1.9,0,0,1,6.6,13Zm-.2-1.56A.41.41,0,0,0,7,11.1V2.9a.41.41,0,0,0-.6-.34L3.92,5.25a.72.72,0,0,1-.55.24H2.28a.78.78,0,0,0-.78.79V7.71a.78.78,0,0,0,.78.78H3.37a.73.73,0,0,1,.55.25Z"
            />
            <path d="M13.25,6.25h-3a.75.75,0,0,0,0,1.5h3a.75.75,0,0,0,0-1.5Z" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentVolumeDownAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
