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
                d="M13.25,14a.76.76,0,0,0,.75-.75v-5a.75.75,0,0,0-1.5,0v2.59a.25.25,0,0,1-.15.23.26.26,0,0,1-.28-.06L9.78,8.72A.75.75,0,0,0,8.72,9.78L11,12.07a.26.26,0,0,1,.06.28.25.25,0,0,1-.23.15H8.25a.75.75,0,0,0,0,1.5Z"
            />
            <path
                d="M0,.75v5a.76.76,0,0,0,.75.75.76.76,0,0,0,.75-.75V3.16a.25.25,0,0,1,.15-.23A.26.26,0,0,1,1.93,3L4.22,5.28A.75.75,0,0,0,5.28,4.22L3,1.93a.26.26,0,0,1-.06-.28.25.25,0,0,1,.23-.15H5.75A.76.76,0,0,0,6.5.75.76.76,0,0,0,5.75,0h-5A.76.76,0,0,0,0,.75Z"
            />
            <path
                d="M10.28,4.78A.75.75,0,1,0,9.22,3.72l-5.5,5.5a.75.75,0,0,0,1.06,1.06Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsExpandDiagonal2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
