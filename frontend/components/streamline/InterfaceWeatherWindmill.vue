<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,7a.5.5,0,0,0-.5-.5H10.75a.25.25,0,0,1-.25-.25V2.5A2.5,2.5,0,0,0,8,0H7a.5.5,0,0,0-.5.5V3.25a.25.25,0,0,1-.25.25H2.5A2.5,2.5,0,0,0,0,6V7a.5.5,0,0,0,.5.5H3.25a.25.25,0,0,1,.25.25V11.5A2.5,2.5,0,0,0,6,14H7a.5.5,0,0,0,.5-.5V10.75a.25.25,0,0,1,.25-.25H11.5A2.5,2.5,0,0,0,14,8ZM7,8.5A1.5,1.5,0,1,1,8.5,7,1.5,1.5,0,0,1,7,8.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceWeatherWindmill',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
