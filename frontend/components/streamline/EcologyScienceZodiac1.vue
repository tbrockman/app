<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.78,8.59l-1-1a1,1,0,0,0-.24-.16.83.83,0,0,0-.58,0,1,1,0,0,0-.24.16l-1,1a.77.77,0,0,0,0,1.07.77.77,0,0,0,.53.21.31.31,0,0,1,.18.07.29.29,0,0,1,.07.18h0a1,1,0,1,1-2,0v-6A2.75,2.75,0,0,0,6.75,1.38a2.7,2.7,0,0,0-1.83.7.27.27,0,0,1-.34,0,2.7,2.7,0,0,0-1.83-.7A2.75,2.75,0,0,0,0,4.13v6a.76.76,0,0,0,.75.75.76.76,0,0,0,.75-.75v-6a1.25,1.25,0,0,1,2.5,0v6a.75.75,0,0,0,1.5,0v-6a1.25,1.25,0,1,1,2.5,0v6a2.5,2.5,0,1,0,5,0,.29.29,0,0,1,.07-.18.21.21,0,0,1,.18-.07.79.79,0,0,0,.53-.22A.77.77,0,0,0,13.78,8.59Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EcologyScienceZodiac1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
