<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.71,10.35h0L12.1,8.14a.47.47,0,0,1-.1-.3V2.75A1.25,1.25,0,0,0,10.75,1.5H3.25A1.25,1.25,0,0,0,2,2.75V7.84a.47.47,0,0,1-.1.3L.3,10.35a1.52,1.52,0,0,0-.3.93A1.26,1.26,0,0,0,1.25,12.5h11.5A1.27,1.27,0,0,0,14,11.27,1.59,1.59,0,0,0,13.71,10.35Zm-.61.44ZM3.5,3.25A.25.25,0,0,1,3.75,3h6.5a.25.25,0,0,1,.25.25v4a.25.25,0,0,1-.25.25H3.75a.25.25,0,0,1-.25-.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerLaptop',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
