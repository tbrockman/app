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
                d="M7,14a7,7,0,1,1,7-7A7,7,0,0,1,7,14ZM7,1.5A5.5,5.5,0,1,0,12.5,7,5.51,5.51,0,0,0,7,1.5Z"
            />
            <path
                d="M10.5,5.61a.49.49,0,0,0-.22-.41.53.53,0,0,0-.46-.06h0l-.72.32a.26.26,0,0,1-.23,0,.23.23,0,0,1-.11-.2A.76.76,0,0,0,8,4.5H4.25a.76.76,0,0,0-.75.75v3.5a.76.76,0,0,0,.75.75H8a.76.76,0,0,0,.75-.75.23.23,0,0,1,.11-.2.26.26,0,0,1,.23,0l.73.33a.53.53,0,0,0,.46-.06.49.49,0,0,0,.22-.41Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ComputerWebcamVideoCircleAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
