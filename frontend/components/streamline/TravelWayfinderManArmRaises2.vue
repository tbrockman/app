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
                d="M12.12,4.58a.75.75,0,0,0-1-.2,6.75,6.75,0,0,1-8.16,0,.75.75,0,1,0-.84,1.24,9.86,9.86,0,0,0,2.5,1.24.25.25,0,0,1,.17.24v6.15a.75.75,0,0,0,1.5,0v-2A.25.25,0,0,1,6.5,11h1a.25.25,0,0,1,.25.25v2a.75.75,0,0,0,1.5,0V7.1a.25.25,0,0,1,.17-.24,9.86,9.86,0,0,0,2.5-1.24A.75.75,0,0,0,12.12,4.58Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderManArmRaises2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
