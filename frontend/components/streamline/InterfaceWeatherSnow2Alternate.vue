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
                d="M10.69,10.5H5.15A5.08,5.08,0,0,1,0,5.5,5.08,5.08,0,0,1,5.15.5,5.15,5.15,0,0,1,10,3.91a.26.26,0,0,0,.27.17,2.36,2.36,0,0,1,.38,0A3.26,3.26,0,0,1,14,7.28,3.27,3.27,0,0,1,10.69,10.5Zm-5.54-8A3.08,3.08,0,0,0,2,5.5a3.08,3.08,0,0,0,3.15,3h5.54A1.27,1.27,0,0,0,12,7.28a1.27,1.27,0,0,0-1.31-1.22,1.32,1.32,0,0,0-.79.26,1,1,0,0,1-1.05.08,1,1,0,0,1-.54-.89v0A3.09,3.09,0,0,0,5.15,2.5Z"
            />
            <circle cx="3" cy="12.5" r="1" />
            <circle cx="7" cy="12.5" r="1" />
            <circle cx="11" cy="12.5" r="1" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceWeatherSnow2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
