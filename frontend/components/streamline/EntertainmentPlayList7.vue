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
                d="M13.64,8.11l-2.5-1.5a.74.74,0,0,0-.76,0,.75.75,0,0,0-.38.65v2.5a.23.23,0,0,1-.08.18.21.21,0,0,1-.18.07H9.5a2,2,0,1,0,2,2V9a.26.26,0,0,1,.38-.22l1,.59a.75.75,0,1,0,.78-1.28Z"
            />
            <circle cx="1" cy="1" r="1" />
            <path
                d="M10.25,1.75h-6A.76.76,0,0,1,3.5,1,.76.76,0,0,1,4.25.25h6A.76.76,0,0,1,11,1,.76.76,0,0,1,10.25,1.75Z"
            />
            <circle cx="1" cy="5" r="1" />
            <path d="M10.25,5.75h-6a.75.75,0,0,1,0-1.5h6a.75.75,0,0,1,0,1.5Z" />
            <circle cx="1" cy="9" r="1" />
            <path
                d="M6.75,9.75H4.25a.75.75,0,0,1,0-1.5h2.5a.75.75,0,0,1,0,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentPlayList7',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
