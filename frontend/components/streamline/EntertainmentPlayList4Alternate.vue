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
                d="M11,14H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0h8a3,3,0,0,1,3,3v8A3,3,0,0,1,11,14ZM3,2A1,1,0,0,0,2,3v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1Z"
            />
            <path
                d="M9.62,7.65l-4,2.25a.77.77,0,0,1-.75,0,.76.76,0,0,1-.37-.65V4.75a.76.76,0,0,1,.37-.65.77.77,0,0,1,.75,0l4,2.25a.75.75,0,0,1,0,1.3Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentPlayList4Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
