<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM9.65,5,7.89,9.9a.48.48,0,0,1-.44.33A.5.5,0,0,1,7,10L6,8,4.05,7a.5.5,0,0,1-.28-.47.48.48,0,0,1,.33-.44L9,4.36a.5.5,0,0,1,.52.11A.53.53,0,0,1,9.65,5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelMapLocationCompass1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
