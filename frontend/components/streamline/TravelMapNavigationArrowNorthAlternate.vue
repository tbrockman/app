<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.92,14a1.16,1.16,0,0,1-.57-.15L7,11.48,2.65,13.85A1.19,1.19,0,0,1,1,12.34L5.9.71a1.21,1.21,0,0,1,2.2,0L13,12.34A1.2,1.2,0,0,1,11.92,14ZM7,9.91a.93.93,0,0,1,.46.12l3.21,1.75a.26.26,0,0,0,.29,0,.24.24,0,0,0,.06-.28l-3.79-9a.25.25,0,0,0-.46,0L3,11.46a.25.25,0,0,0,.35.32L6.53,10A1,1,0,0,1,7,9.91Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelMapNavigationArrowNorthAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
