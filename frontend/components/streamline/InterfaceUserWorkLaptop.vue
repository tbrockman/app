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
                d="M13.49,14a.5.5,0,0,0,.37-.17.49.49,0,0,0,.12-.39A5,5,0,0,0,9,9a5.1,5.1,0,0,0-1.11.12.23.23,0,0,0-.16.13.2.2,0,0,0,0,.2l.29.89a.25.25,0,0,0,.21.17A2.5,2.5,0,0,1,10.51,13a2.46,2.46,0,0,1-.1.72.22.22,0,0,0,.21.28Z"
            />
            <circle cx="9.01" cy="5" r="2.5" />
            <path
                d="M1.26,13.63a.5.5,0,0,0,.48.37H8a1,1,0,0,0,0-2H7.15a.26.26,0,0,1-.24-.17l-.8-2.46A.49.49,0,0,0,5.63,9H.51a.47.47,0,0,0-.39.2A.48.48,0,0,0,0,9.63Zm2.25-2.88a.75.75,0,1,1-.75.75A.75.75,0,0,1,3.51,10.75Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUserWorkLaptop',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
