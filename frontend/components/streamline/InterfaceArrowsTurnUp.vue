<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.71,4.29l-4-4a1,1,0,0,0-1.42,0l-4,4A1,1,0,0,0,5.71,5.71L7.57,3.84a.26.26,0,0,1,.28,0A.25.25,0,0,1,8,4V9A3,3,0,0,1,2,9V7A1,1,0,0,0,0,7V9A5,5,0,0,0,10,9V4a.25.25,0,0,1,.15-.23.26.26,0,0,1,.28,0l1.86,1.87a1,1,0,0,0,1.42-1.42Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsTurnUp',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
