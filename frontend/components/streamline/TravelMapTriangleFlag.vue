<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.83,4.58l-9-4.5A.76.76,0,0,0,1.75.75v12.5a.75.75,0,0,0,1.5,0V10.37a.25.25,0,0,1,.14-.23l8.44-4.22a.74.74,0,0,0,0-1.34ZM3.61,8.36a.26.26,0,0,1-.24,0,.22.22,0,0,1-.12-.21V2.37a.22.22,0,0,1,.12-.21.26.26,0,0,1,.24,0L9.38,5a.25.25,0,0,1,0,.44Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelMapTriangleFlag',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
