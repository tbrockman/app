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
                d="M13,4H5A1,1,0,0,0,4,5v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V5A1,1,0,0,0,13,4ZM6.5,12.5a1,1,0,1,1,1-1A1,1,0,0,1,6.5,12.5Zm0-5a1,1,0,1,1,1-1A1,1,0,0,1,6.5,7.5ZM9,10a1,1,0,1,1,1-1A1,1,0,0,1,9,10Zm2.5,2.5a1,1,0,1,1,1-1A1,1,0,0,1,11.5,12.5Zm0-5a1,1,0,1,1,1-1A1,1,0,0,1,11.5,7.5Z"
            />
            <path
                d="M2.5,5A2.5,2.5,0,0,1,5,2.5H9.75A.25.25,0,0,0,10,2.25V1A1,1,0,0,0,9,0H1A1,1,0,0,0,0,1V9a1,1,0,0,0,1,1H2.25a.25.25,0,0,0,.25-.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentLeisureChessPieceDice',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
