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
                d="M.12,7.12a.78.78,0,1,1,1.56,0A5.32,5.32,0,1,0,7,1.8a6.32,6.32,0,0,0-2,.36.31.31,0,0,0-.16.16.25.25,0,0,0,0,.22l.22.32a.75.75,0,0,1,.13.43.79.79,0,0,1-.12.42A.76.76,0,0,1,4.28,4l-2.11-.4a.75.75,0,0,1-.61-.88h0L1.93.63A.74.74,0,0,1,2.52,0a.77.77,0,0,1,.79.31l.31.46a.25.25,0,0,0,.31.09A7.76,7.76,0,0,1,7,.23,6.89,6.89,0,1,1,.12,7.12Z"
            />
            <path
                d="M5.37,9.75a.8.8,0,0,0,.33-.08l2-1A.75.75,0,0,0,8.12,8V4.75a.75.75,0,0,0-1.5,0V7.38a.27.27,0,0,1-.14.23L5,8.33a.75.75,0,0,0,.34,1.42Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTimeRewind',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
