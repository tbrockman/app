<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.7,9.13,9.38,7.22a.25.25,0,0,1,0-.44L12.7,4.87a1,1,0,0,0-1-1.74L8.37,5.05a.23.23,0,0,1-.25,0A.26.26,0,0,1,8,4.83V1A1,1,0,0,0,6,1V4.83a.26.26,0,0,1-.12.22.23.23,0,0,1-.25,0L2.3,3.13a1,1,0,0,0-1,1.74L4.62,6.78a.25.25,0,0,1,0,.44L1.3,9.13A1,1,0,0,0,.94,10.5a1,1,0,0,0,1.36.37L5.63,9a.23.23,0,0,1,.25,0A.26.26,0,0,1,6,9.17V13a1,1,0,0,0,2,0V9.17A.26.26,0,0,1,8.12,9a.23.23,0,0,1,.25,0l3.33,1.92a1,1,0,0,0,1.36-.37A1,1,0,0,0,12.7,9.13Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerKeyboardAsterisk1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
