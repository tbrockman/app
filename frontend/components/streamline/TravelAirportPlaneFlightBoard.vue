<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12,0H2A1,1,0,0,0,1,1V13a1,1,0,0,0,1,1H12a1,1,0,0,0,1-1V1A1,1,0,0,0,12,0ZM4.3,3.18a.61.61,0,0,1,.84.25l.26.48a.24.24,0,0,0,.34.1l.64-.34a.26.26,0,0,0,.12-.15.25.25,0,0,0,0-.19l-.42-.79a.61.61,0,0,1,.25-.84A.63.63,0,0,1,7.16,2l.42.79a.26.26,0,0,0,.34.11l.79-.43a.63.63,0,0,1,.58,1.11l-3.74,2a.59.59,0,0,1-.29.07.62.62,0,0,1-.55-.33L4,4A.62.62,0,0,1,4.3,3.18Zm5.2,8.69h-5a.62.62,0,0,1-.62-.62.63.63,0,0,1,.62-.63h5a.63.63,0,0,1,.62.63A.62.62,0,0,1,9.5,11.87Zm0-3h-5a.62.62,0,0,1-.62-.62.63.63,0,0,1,.62-.63h5a.63.63,0,0,1,.62.63A.62.62,0,0,1,9.5,8.87Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelAirportPlaneFlightBoard',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
