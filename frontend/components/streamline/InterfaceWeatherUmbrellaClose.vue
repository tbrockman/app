<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10,11a.76.76,0,0,0-.75.75.75.75,0,0,1-1.5,0v-2A.25.25,0,0,1,8,9.5h2.3a.52.52,0,0,0,.41-.21.48.48,0,0,0,.06-.45L7.87.34A.51.51,0,0,0,7.39,0H6.61a.51.51,0,0,0-.48.34l-2.9,8.5a.48.48,0,0,0,.06.45.52.52,0,0,0,.41.21H6a.25.25,0,0,1,.25.25v2a2.25,2.25,0,0,0,4.5,0A.76.76,0,0,0,10,11Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceWeatherUmbrellaClose',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
