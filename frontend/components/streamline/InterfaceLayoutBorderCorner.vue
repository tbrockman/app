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
                d="M.75,13.5A.76.76,0,0,1,0,12.75v-11A1.76,1.76,0,0,1,1.75,0h11a.76.76,0,0,1,.75.75.76.76,0,0,1-.75.75h-11a.25.25,0,0,0-.25.25v11A.76.76,0,0,1,.75,13.5Z"
            />
            <path
                d="M13.25,8a.76.76,0,0,1-.75-.75V4.75a.75.75,0,0,1,1.5,0v2.5A.76.76,0,0,1,13.25,8Z"
            />
            <path
                d="M12.25,14h-1a.75.75,0,0,1,0-1.5h1a.25.25,0,0,0,.25-.25v-1a.75.75,0,0,1,1.5,0v1A1.76,1.76,0,0,1,12.25,14Z"
            />
            <path
                d="M7.25,14H4.75a.75.75,0,0,1,0-1.5h2.5a.75.75,0,0,1,0,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceLayoutBorderCorner',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
