<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.5,4.5A4.5,4.5,0,1,0,5.82,8.84.26.26,0,0,1,6,9.08v.67a.25.25,0,0,1-.25.25H5a1,1,0,0,0,0,2h.75a.25.25,0,0,1,.25.25V13a1,1,0,0,0,2,0v-.75A.25.25,0,0,1,8.25,12H9a1,1,0,0,0,0-2H8.25A.25.25,0,0,1,8,9.75V9.08a.26.26,0,0,1,.18-.24A4.51,4.51,0,0,0,11.5,4.5Zm-7,0A2.5,2.5,0,1,1,7,7,2.5,2.5,0,0,1,4.5,4.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderWomanSymbol',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
