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
                d="M14,6A4.75,4.75,0,0,0,9.25,1.25H4.75A1.76,1.76,0,0,0,3,3V9a.25.25,0,0,1-.25.25h-1A.25.25,0,0,1,1.5,9V8a.76.76,0,0,0-.75-.75A.76.76,0,0,0,0,8v2a.76.76,0,0,0,.75.75H5.51a.25.25,0,0,0,.25-.23,3,3,0,0,1,6,0,.25.25,0,0,0,.25.23h.26A1.76,1.76,0,0,0,14,9ZM10.5,5a.76.76,0,0,1-.75.75H7.25a.75.75,0,0,1,0-1.5h2.5A.76.76,0,0,1,10.5,5Z"
            />
            <circle cx="8.75" cy="10.75" r="2" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelPlacesCart',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
