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
                d="M11,10.5a.76.76,0,0,0-.75.75,1.25,1.25,0,0,1-2.5,0V8.75A.25.25,0,0,0,7.5,8.5h-1a.25.25,0,0,0-.25.25v2.5a2.75,2.75,0,0,0,5.5,0A.76.76,0,0,0,11,10.5Z"
            />
            <path
                d="M12.47,7.5A.5.5,0,0,0,13,7,6,6,0,0,0,8,1.58a.26.26,0,0,1-.21-.25V.75a.75.75,0,0,0-1.5,0v.58A.26.26,0,0,1,6,1.58,6,6,0,0,0,1,7a.5.5,0,0,0,.51.53Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceWeatherUmbrella',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
