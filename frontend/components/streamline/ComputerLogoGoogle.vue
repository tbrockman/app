<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.53,5.54H9a.78.78,0,0,0-.79.78V7.79A.78.78,0,0,0,9,8.57h.79a.25.25,0,0,1,.2.09.29.29,0,0,1,.05.2A2.63,2.63,0,0,1,7.17,11C4.8,11,4,8.83,4,7c0-2,1-4,3.2-4a3.88,3.88,0,0,1,2.49.79l.11.06a.74.74,0,0,0,.63.1.79.79,0,0,0,.49-.44l.65-1.49a.77.77,0,0,0-.29-.95A7.49,7.49,0,0,0,7.17,0C3.36,0,.61,2.94.61,7s2.75,7,6.56,7c3.66,0,6.22-2.65,6.22-6.45C13.39,6.2,12.79,5.54,11.53,5.54Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerLogoGoogle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
