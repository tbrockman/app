<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.25,14a.75.75,0,0,0,.66-.39.76.76,0,0,0,0-.77L8,3.92a.24.24,0,0,1,0-.28L9.63,1.16A.75.75,0,0,0,8.37.34L7.21,2.1a.24.24,0,0,1-.42,0L5.63.34a.75.75,0,1,0-1.26.82L6,3.64a.24.24,0,0,1,0,.28L.12,12.84a.76.76,0,0,0,0,.77A.75.75,0,0,0,.75,14h5A.25.25,0,0,0,6,13.75V11.5a1,1,0,0,1,2,0v2.25a.25.25,0,0,0,.25.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelPlacesCampingTent',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
