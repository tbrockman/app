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
                d="M6,8.4V2.25a2.25,2.25,0,0,0-4.5,0V8.41A3.25,3.25,0,1,0,7,10.75,3.23,3.23,0,0,0,6,8.4ZM3.75,12.5A1.76,1.76,0,0,1,2,10.75a1.74,1.74,0,0,1,.7-1.4.74.74,0,0,0,.3-.6V2.25a.75.75,0,0,1,1.5,0v6.5a.74.74,0,0,0,.3.6,1.74,1.74,0,0,1,.7,1.4A1.76,1.76,0,0,1,3.75,12.5Z"
            />
            <path
                d="M8.5,4a1,1,0,0,1,1,1A.75.75,0,0,0,11,5,2.5,2.5,0,0,0,8.5,2.5.75.75,0,0,0,8.5,4Z"
            />
            <path
                d="M12.75,5A.76.76,0,0,1,12,4.25,2.75,2.75,0,0,0,9.25,1.5.76.76,0,0,1,8.5.75.76.76,0,0,1,9.25,0,4.26,4.26,0,0,1,13.5,4.25.76.76,0,0,1,12.75,5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ComputerConnectionTemperature',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
