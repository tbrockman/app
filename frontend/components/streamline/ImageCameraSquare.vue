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
                d="M12,0H2A2,2,0,0,0,0,2V12a2,2,0,0,0,2,2H12a2,2,0,0,0,2-2V2A2,2,0,0,0,12,0Zm-.75,8.5A1.5,1.5,0,0,1,9.75,10H4.25a1.5,1.5,0,0,1-1.5-1.5v-2A1.5,1.5,0,0,1,4.25,5h.6a.25.25,0,0,0,.24-.18l.3-1a.5.5,0,0,1,.48-.35H8.13a.5.5,0,0,1,.48.35l.3,1A.25.25,0,0,0,9.15,5h.6a1.5,1.5,0,0,1,1.5,1.5Z"
            />
            <circle cx="7" cy="7.25" r="1.25" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ImageCameraSquare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
