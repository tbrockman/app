<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.26.07a.52.52,0,0,1,.58.07A.52.52,0,0,1,13,.71l-5.5,13a.52.52,0,0,1-.92,0L1,.71A.52.52,0,0,1,1.16.14.52.52,0,0,1,1.74.07L6.88,2.88a.25.25,0,0,0,.24,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelMapNavigationArrowSouth',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
