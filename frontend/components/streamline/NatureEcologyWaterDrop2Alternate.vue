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
                d="M7,10.25A3.9,3.9,0,0,1,3.11,6.36c0-1.44,1.58-4,2.91-5.85a1.24,1.24,0,0,1,2,0c1.33,1.87,2.91,4.41,2.91,5.85A3.9,3.9,0,0,1,7,10.25ZM7,1.72C5.54,3.83,4.61,5.63,4.61,6.36a2.39,2.39,0,0,0,4.78,0C9.39,5.63,8.46,3.83,7,1.72Z"
            />
            <path
                d="M7,14A7.87,7.87,0,0,1,.1,10.63a.75.75,0,0,1,1.3-.76A6.39,6.39,0,0,0,7,12.5a6.42,6.42,0,0,0,5.6-2.63.75.75,0,0,1,1.3.76A7.87,7.87,0,0,1,7,14Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'NatureEcologyWaterDrop2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
