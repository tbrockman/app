<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M2.28,12.6A6.53,6.53,0,0,0,5.47,7,6.53,6.53,0,0,0,2.28,1.4.48.48,0,0,1,2,.94.52.52,0,0,1,2.34.51,7,7,0,1,1,5,14a7,7,0,0,1-2.63-.51A.52.52,0,0,1,2,13.06.48.48,0,0,1,2.28,12.6Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceWeatherCresentMoon2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
