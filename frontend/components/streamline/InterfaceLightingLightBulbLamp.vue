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
                d="M8.44,7.5a.48.48,0,0,0,.37-.17.47.47,0,0,0,.12-.39A4.48,4.48,0,0,0,6.6,3.54a.26.26,0,0,1-.13-.22V1a1,1,0,0,0-1-1h-2a1,1,0,0,0-1,1V3.32a.26.26,0,0,1-.13.22A4.49,4.49,0,0,0,0,6.94a.52.52,0,0,0,.13.39A.48.48,0,0,0,.5,7.5Z"
            />
            <path
                d="M13.22,12.5h-.5a.25.25,0,0,1-.25-.25V6A4.75,4.75,0,0,0,8.25,1.28a.25.25,0,0,0-.2.06A.27.27,0,0,0,8,1.53v1a.26.26,0,0,0,.1.2l.06,0a.16.16,0,0,0,.11,0A3.26,3.26,0,0,1,11,6v6.25a.25.25,0,0,1-.25.25H7.22a.75.75,0,1,0,0,1.5h6a.75.75,0,0,0,0-1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceLightingLightBulbLamp',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
