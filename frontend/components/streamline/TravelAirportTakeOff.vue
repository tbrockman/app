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
                d="M12.45,3.92l-1.26-.4a.4.4,0,0,0-.47.15L10,4.84a.25.25,0,0,1-.32.09L5.09,2.67A3,3,0,0,0,.78,4.2a.81.81,0,0,0,.54,1l3.18,1a.51.51,0,0,1,.33.34L5.6,9.28a.42.42,0,0,0,.29.29L7.3,10a.45.45,0,0,0,.58-.5L7.46,7.6a.24.24,0,0,1,.08-.24.23.23,0,0,1,.24-.05l2.85.92a.8.8,0,0,0,1-.49l1.07-3.32A.4.4,0,0,0,12.45,3.92Z"
            />
            <path
                d="M13.25,14H.75a.75.75,0,0,1,0-1.5h12.5a.75.75,0,0,1,0,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelAirportTakeOff',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
