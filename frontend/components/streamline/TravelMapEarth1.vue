<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM3,10a.09.09,0,0,1,0-.11.11.11,0,0,1,.1-.06A2.12,2.12,0,0,0,5.19,7.69V6.31A1.12,1.12,0,0,1,6.31,5.19,2.12,2.12,0,0,0,8.42,3.08V2.55a.24.24,0,0,1,.11-.2.24.24,0,0,1,.23,0,5.06,5.06,0,0,1,3.08,3.41.26.26,0,0,1-.25.31H9.54a2.12,2.12,0,1,0,0,4.23.66.66,0,0,1,.65.58A5,5,0,0,1,3,10Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelMapEarth1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
