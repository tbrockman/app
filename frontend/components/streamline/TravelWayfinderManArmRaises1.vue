<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="7" cy="2.25" r="2.25" />
            <path
                d="M12,6.5a.76.76,0,0,0-.75-.75H2.75a.75.75,0,0,0,0,1.5H4.5a.25.25,0,0,1,.25.25v5.75a.75.75,0,0,0,1.5,0V11a.25.25,0,0,1,.25-.25h1a.25.25,0,0,1,.25.25v2.25a.75.75,0,0,0,1.5,0V7.5a.25.25,0,0,1,.25-.25h1.75A.76.76,0,0,0,12,6.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderManArmRaises1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
