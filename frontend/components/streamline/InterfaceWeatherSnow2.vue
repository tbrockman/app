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
                d="M11,4.25a3.09,3.09,0,0,0-.8.11.27.27,0,0,1-.2,0,.3.3,0,0,1-.12-.17A5,5,0,1,0,5,10.25h6a3,3,0,0,0,0-6Z"
            />
            <circle cx="3" cy="12.75" r="1" />
            <circle cx="7" cy="12.75" r="1" />
            <circle cx="11" cy="12.75" r="1" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceWeatherSnow2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
