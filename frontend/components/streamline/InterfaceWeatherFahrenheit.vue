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
                d="M2.25,4.5A2.25,2.25,0,1,1,4.5,2.25,2.25,2.25,0,0,1,2.25,4.5Zm0-3A.75.75,0,1,0,3,2.25.76.76,0,0,0,2.25,1.5Z"
            />
            <path
                d="M14,1a1,1,0,0,0-1-1H7A1,1,0,0,0,6,1V13a1,1,0,0,0,2,0V8a.25.25,0,0,1,.25-.25H11a1,1,0,0,0,0-2H8.25A.25.25,0,0,1,8,5.5V2.25A.25.25,0,0,1,8.25,2H13A1,1,0,0,0,14,1Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceWeatherFahrenheit',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
