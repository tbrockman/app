<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,14A3.25,3.25,0,0,1,4.75,8.41V2.25a2.25,2.25,0,0,1,4.5,0V8.4A3.25,3.25,0,0,1,7,14ZM7,1.5a.76.76,0,0,0-.75.75v6.5a.74.74,0,0,1-.3.6,1.74,1.74,0,0,0-.7,1.4,1.75,1.75,0,0,0,3.5,0,1.74,1.74,0,0,0-.7-1.4.74.74,0,0,1-.3-.6V2.25A.76.76,0,0,0,7,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceWeatherTemperature',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
