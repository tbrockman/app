<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25,0H1.75A1.76,1.76,0,0,0,0,1.75v10.5A1.76,1.76,0,0,0,1.75,14h10.5A1.76,1.76,0,0,0,14,12.25V1.75A1.76,1.76,0,0,0,12.25,0ZM6,4.25a.5.5,0,0,1-.5.5H2a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,2,2H5.5a.5.5,0,0,1,.5.5Zm6.5,0a.5.5,0,0,1-.5.5H8.5a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,8.5,2H12a.5.5,0,0,1,.5.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelHotelBed2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
