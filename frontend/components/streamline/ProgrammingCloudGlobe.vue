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
                d="M9.8,2.41a.25.25,0,0,1-.17-.2A2.57,2.57,0,0,0,4.7,1.63a.26.26,0,0,1-.18.16A2.13,2.13,0,0,0,2.91,4.64,2.18,2.18,0,0,0,5,6h4.2A1.89,1.89,0,0,0,11,4.71,1.84,1.84,0,0,0,9.8,2.41Z"
            />
            <path
                d="M1.52,14a.5.5,0,0,0,.5-.41A5.08,5.08,0,0,1,6.4,9.44a.31.31,0,0,1,.2.07.23.23,0,0,1,.08.18v1.23a.3.3,0,0,1,0,.15l-1.1,1.47A.92.92,0,0,0,6,14l.09,0h7.37a.52.52,0,0,0,.38-.17.55.55,0,0,0,.11-.41,7,7,0,0,0-13.82,0,.51.51,0,0,0,.11.4A.49.49,0,0,0,.58,14Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingCloudGlobe',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
