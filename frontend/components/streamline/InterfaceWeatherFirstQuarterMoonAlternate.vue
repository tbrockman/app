<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M4,14a1,1,0,0,1-1-1V1A1,1,0,0,1,4,0,7,7,0,0,1,4,14ZM5.32,2.18a.24.24,0,0,0-.22,0,.26.26,0,0,0-.1.2v9.16a.26.26,0,0,0,.1.2.24.24,0,0,0,.22,0,5,5,0,0,0,0-9.64Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceWeatherFirstQuarterMoonAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
