<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13,14a1,1,0,0,0,.88-.53,1,1,0,0,0-.05-1L8.29,4.14a.28.28,0,0,1,0-.28L9.83,1.55A1,1,0,0,0,8.17.45l-1,1.44a.26.26,0,0,1-.42,0L5.83.45a1,1,0,0,0-1.66,1.1L5.71,3.86a.28.28,0,0,1,0,.28L.17,12.45a1,1,0,0,0-.05,1A1,1,0,0,0,1,14ZM8,12a.25.25,0,0,1-.25-.25v-1.5a.75.75,0,0,0-1.5,0v1.5A.25.25,0,0,1,6,12H3.34a.26.26,0,0,1-.23-.13.27.27,0,0,1,0-.26l3.66-5.5a.26.26,0,0,1,.42,0l3.66,5.5a.27.27,0,0,1,0,.26.26.26,0,0,1-.23.13Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelPlacesCampingTentAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
