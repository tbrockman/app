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
                d="M13.25,11.62H.75a.75.75,0,0,0,0,1.5h12.5a.75.75,0,0,0,0-1.5Z"
            />
            <path
                d="M.75,10.12h12.5A.75.75,0,0,0,14,9.37,7,7,0,0,0,8,2.44a.24.24,0,0,1-.22-.24V1.87A.25.25,0,0,1,8,1.62h.75a.75.75,0,0,0,0-1.5H5.25a.75.75,0,0,0,0,1.5H6a.25.25,0,0,1,.25.25V2.2A.24.24,0,0,1,6,2.44,7,7,0,0,0,0,9.37.75.75,0,0,0,.75,10.12ZM7,3.87a5.51,5.51,0,0,1,5.4,4.46.28.28,0,0,1-.05.2.25.25,0,0,1-.2.09H1.85a.25.25,0,0,1-.2-.09.24.24,0,0,1,0-.2A5.51,5.51,0,0,1,7,3.87Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelHotelBellAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
