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
                d="M6.44,9.75h-.8a.25.25,0,0,1-.24-.18A3.57,3.57,0,0,0,2,7H.75a.75.75,0,0,0,0,1.5H2a2.09,2.09,0,0,1,1.69.85.23.23,0,0,1,0,.26.24.24,0,0,1-.22.14H2.25a.75.75,0,0,0,0,1.5H6.44a2.12,2.12,0,0,1,1.69.85.27.27,0,0,1,0,.26.25.25,0,0,1-.23.14H.75a.75.75,0,0,0,0,1.5h8.5a.76.76,0,0,0,.75-.75A3.54,3.54,0,0,0,6.44,9.75Z"
            />
            <path
                d="M14,5.5a.76.76,0,0,0-.75-.75h-.4a.25.25,0,0,1-.23-.15A5,5,0,0,0,9,1.6a.24.24,0,0,1-.2-.24V.75a.75.75,0,0,0-1.5,0v.61a.24.24,0,0,1-.2.24,5,5,0,0,0-3.67,3,.25.25,0,0,1-.23.15h-.4a.75.75,0,0,0,0,1.5h10.5A.76.76,0,0,0,14,5.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelHotelServingDomeHand',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
