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
                d="M8.25,8h-1A.25.25,0,0,1,7,7.75V6.51a.26.26,0,0,1,.14-.22,2,2,0,1,0-1.77,0,.25.25,0,0,1,.13.22V8.75a.76.76,0,0,0,.75.75h2a.25.25,0,0,1,.25.25v3.5a.75.75,0,0,0,1.5,0V9.75A1.75,1.75,0,0,0,8.25,8Z"
            />
            <path
                d="M6.34,10.7a.75.75,0,0,0-1,.46A2,2,0,1,1,3.5,8.5.75.75,0,0,0,3.5,7a3.5,3.5,0,1,0,3.3,4.66A.75.75,0,0,0,6.34,10.7Z"
            />
            <path
                d="M11.75,0h-1.5A.76.76,0,0,0,9.5.75v5a.75.75,0,0,0,1.5,0v-1a.25.25,0,0,1,.25-.25h.5a2.25,2.25,0,0,0,0-4.5Zm0,3h-.5A.25.25,0,0,1,11,2.75v-1a.25.25,0,0,1,.25-.25h.5a.75.75,0,0,1,0,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderDisabilityParking',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
