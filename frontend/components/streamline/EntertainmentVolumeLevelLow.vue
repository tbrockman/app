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
                d="M9.88,9.62a.75.75,0,0,1,0-1.06,2.22,2.22,0,0,0,0-3.12.75.75,0,0,1,0-1.06.75.75,0,0,1,1.06,0,3.74,3.74,0,0,1,0,5.22A.75.75,0,0,1,9.88,9.62Z"
            />
            <path
                d="M6.69,1a1.35,1.35,0,0,0-.8.27L3.07,4.42a.27.27,0,0,1-.19.08H1.75A1.76,1.76,0,0,0,0,6.25v1.5A1.76,1.76,0,0,0,1.75,9.5H2.88a.27.27,0,0,1,.19.08l2.82,3.15a1.35,1.35,0,0,0,.8.27A1.31,1.31,0,0,0,8,11.69V2.31A1.31,1.31,0,0,0,6.69,1Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentVolumeLevelLow',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
