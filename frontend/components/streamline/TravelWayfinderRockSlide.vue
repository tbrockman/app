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
                d="M8.84,10.63,3.54,5.81a.22.22,0,0,1-.08-.15L3,2.43a.48.48,0,0,0-.15-.28l-2-2A.47.47,0,0,0,.31,0,.5.5,0,0,0,0,.5v13a.5.5,0,0,0,.5.5H9a.53.53,0,0,0,.39-.18.53.53,0,0,0,.1-.42L9,10.9A.49.49,0,0,0,8.84,10.63Z"
            />
            <circle cx="10" cy="5" r="1.75" />
            <path d="M13,10a1,1,0,1,0,1,1A1,1,0,0,0,13,10Z" />
            <path d="M6,2A1,1,0,1,0,5,1,1,1,0,0,0,6,2Z" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderRockSlide',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
