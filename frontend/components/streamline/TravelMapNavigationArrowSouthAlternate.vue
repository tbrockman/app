<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,14a1.18,1.18,0,0,1-1.1-.71L1,1.66A1.19,1.19,0,0,1,2.65.15l4.23,2.3a.25.25,0,0,0,.24,0L11.35.15a1.18,1.18,0,0,1,1.37.16A1.19,1.19,0,0,1,13,1.66L8.1,13.29A1.18,1.18,0,0,1,7,14ZM3.33,2.22A.25.25,0,0,0,3,2.54l3.79,9a.25.25,0,0,0,.46,0l3.79-9a.25.25,0,0,0-.35-.32L7.47,4a1,1,0,0,1-.94,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelMapNavigationArrowSouthAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
