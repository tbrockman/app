<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13,2.5a.5.5,0,0,0,.5-.5V.5A.5.5,0,0,0,13,0H10.5a.5.5,0,0,0-.5.5.47.47,0,0,1-.15.35.5.5,0,0,1-.7,0A.47.47,0,0,1,9,.5.5.5,0,0,0,8.5,0h-3A.5.5,0,0,0,5,.5a.47.47,0,0,1-.15.35.5.5,0,0,1-.7,0A.47.47,0,0,1,4,.5.5.5,0,0,0,3.5,0H1A.5.5,0,0,0,.5.5V2a.5.5,0,0,0,.5.5.47.47,0,0,1,.35.15.48.48,0,0,1,0,.7A.47.47,0,0,1,1,3.5.5.5,0,0,0,.5,4V6a.5.5,0,0,0,.5.5.47.47,0,0,1,.35.15.48.48,0,0,1,0,.7A.47.47,0,0,1,1,7.5.5.5,0,0,0,.5,8v2a.5.5,0,0,0,.5.5.47.47,0,0,1,.35.15.48.48,0,0,1,0,.7A.47.47,0,0,1,1,11.5a.5.5,0,0,0-.5.5v1.5A.5.5,0,0,0,1,14H3.5a.5.5,0,0,0,.5-.5.47.47,0,0,1,.15-.35.5.5,0,0,1,.7,0A.47.47,0,0,1,5,13.5a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5.47.47,0,0,1,.15-.35.5.5,0,0,1,.7,0,.47.47,0,0,1,.15.35.5.5,0,0,0,.5.5H13a.5.5,0,0,0,.5-.5V12a.5.5,0,0,0-.5-.5.5.5,0,0,1,0-1,.5.5,0,0,0,.5-.5V8a.5.5,0,0,0-.5-.5.5.5,0,0,1,0-1,.5.5,0,0,0,.5-.5V4a.5.5,0,0,0-.5-.5.51.51,0,0,1-.5-.5.51.51,0,0,1,.5-.5ZM5.25,5.44a.26.26,0,0,0,.13-.16.22.22,0,0,0,0-.19L5,4.56a.2.2,0,0,1,0-.13V4a.5.5,0,0,1,.5-.5h3A.5.5,0,0,1,9,4v.43a.2.2,0,0,1,0,.13l-.31.53a.22.22,0,0,0,0,.19.26.26,0,0,0,.13.16A2.28,2.28,0,0,1,9.92,7.21a.25.25,0,0,1-.06.2.25.25,0,0,1-.19.09H4.33a.25.25,0,0,1-.19-.09.25.25,0,0,1-.06-.2A2.28,2.28,0,0,1,5.25,5.44ZM7,11c-1.71,0-2.85-.86-3-2.23a.26.26,0,0,1,.07-.19.23.23,0,0,1,.18-.08H9.74a.23.23,0,0,1,.18.08.26.26,0,0,1,.07.19C9.85,10.14,8.71,11,7,11Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelPlacesStampJar',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
