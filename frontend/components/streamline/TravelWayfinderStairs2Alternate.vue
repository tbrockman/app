<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.77,14H1.23A1.23,1.23,0,0,1,0,12.77V1.23A1.23,1.23,0,0,1,1.23,0H5.08A1.23,1.23,0,0,1,6.31,1.23V3.85H8.92a1.23,1.23,0,0,1,1.23,1.23V7.69h2.62A1.23,1.23,0,0,1,14,8.92v3.85A1.23,1.23,0,0,1,12.77,14ZM1.5,12.25a.25.25,0,0,0,.25.25h10.5a.25.25,0,0,0,.25-.25V9.44a.25.25,0,0,0-.25-.25H9.64a1,1,0,0,1-1-1V5.35H5.8a1,1,0,0,1-1-1V1.75a.25.25,0,0,0-.25-.25H1.75a.25.25,0,0,0-.25.25ZM5.08,1.5h0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderStairs2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
