<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="7" cy="7" r="1.5" />
            <path
                d="M13.25,7a.76.76,0,0,1-.75-.75V1.75a.25.25,0,0,0-.25-.25H7.75A.76.76,0,0,1,7,.75.76.76,0,0,1,7.75,0h5A1.25,1.25,0,0,1,14,1.25v5A.76.76,0,0,1,13.25,7Zm-.5-5.5h0Z"
            />
            <path
                d="M7,13.25a.76.76,0,0,1-.75.75h-5A1.25,1.25,0,0,1,0,12.75v-5A.76.76,0,0,1,.75,7a.76.76,0,0,1,.75.75v4.5a.25.25,0,0,0,.25.25h4.5A.76.76,0,0,1,7,13.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsDiagonalScrollPoint1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
