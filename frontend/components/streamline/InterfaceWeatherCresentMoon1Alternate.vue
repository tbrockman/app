<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.64,11.7a5.45,5.45,0,0,1,0-9.4,1,1,0,0,0,.48-.94A1,1,0,0,0,11.5.51,7,7,0,1,0,8.87,14a7,7,0,0,0,2.63-.51,1,1,0,0,0,.62-.85A1,1,0,0,0,11.64,11.7Zm-3.12-.14a.26.26,0,0,1-.23.41A5,5,0,0,1,8.29,2a.26.26,0,0,1,.23.41,7.41,7.41,0,0,0,0,9.12Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceWeatherCresentMoon1Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
