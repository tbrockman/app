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
                d="M11.87.11A.76.76,0,0,0,11.5,0H2.75C1.21,0,0,1.87,0,4.25v9A.76.76,0,0,0,.75,14h8.5a.76.76,0,0,0,.75-.75V7.54A2.05,2.05,0,0,0,11.25,8C12.77,8,14,6.21,14,4,14,2.1,13.09.52,11.87.11ZM8.5,12.25a.25.25,0,0,1-.25.25H1.75a.25.25,0,0,1-.25-.25v-8c0-1.68.74-2.75,1.25-2.75h6a.25.25,0,0,1,.22.35A5.39,5.39,0,0,0,8.5,4ZM12,4.5a.75.75,0,0,1-1.5,0v-1a.75.75,0,0,1,1.5,0Z"
            />
            <path
                d="M6.25,6.75H3.75a.75.75,0,0,0,0,1.5h2.5a.75.75,0,0,0,0-1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderToiletPaper',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
