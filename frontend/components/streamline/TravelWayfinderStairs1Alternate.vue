<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,12.77A1.23,1.23,0,0,1,12.77,14H1.23A1.23,1.23,0,0,1,0,12.77V8.92A1.23,1.23,0,0,1,1.23,7.69H3.85V5.08A1.23,1.23,0,0,1,5.08,3.85H7.69V1.23A1.23,1.23,0,0,1,8.92,0h3.85A1.23,1.23,0,0,1,14,1.23ZM1.5,12.25a.25.25,0,0,0,.25.25h10.5a.25.25,0,0,0,.25-.25V1.75a.25.25,0,0,0-.25-.25H9.44a.25.25,0,0,0-.25.25V4.36a1,1,0,0,1-1,1H5.6a.25.25,0,0,0-.25.25V8.2a1,1,0,0,1-1,1H1.75a.25.25,0,0,0-.25.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderStairs1Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
