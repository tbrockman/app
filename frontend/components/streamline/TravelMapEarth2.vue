<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM5.85,11.87a.26.26,0,0,1-.2-.25V9.77A2.35,2.35,0,0,0,3.31,7.42H2.25A.25.25,0,0,1,2,7.18V7A5,5,0,0,1,9.72,2.81a.24.24,0,0,1,.11.28.25.25,0,0,1-.24.18H8.38A2.35,2.35,0,0,0,8.38,8a.42.42,0,0,1,.43.42v3.11a.25.25,0,0,1-.17.23A5,5,0,0,1,7,12,5.4,5.4,0,0,1,5.85,11.87Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelMapEarth2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
