<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path
                d="M3.25,7.5A3.26,3.26,0,0,0,6.5,4.25,3.18,3.18,0,0,0,6,2.5h7.27a.75.75,0,0,0,0-1.5h-10a3.25,3.25,0,0,0,0,6.5Zm0-5A1.75,1.75,0,1,1,1.5,4.25,1.76,1.76,0,0,1,3.25,2.5Z"
            />
            <path
                d="M10.75,6.5a3.24,3.24,0,0,0-2.93,4.64.25.25,0,0,1,0,.24.25.25,0,0,1-.22.12H.75a.75.75,0,0,0,0,1.5h10a3.25,3.25,0,0,0,0-6.5Zm0,5A1.75,1.75,0,1,1,12.5,9.75,1.76,1.76,0,0,1,10.75,11.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EcologyScienceZodiac12',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
