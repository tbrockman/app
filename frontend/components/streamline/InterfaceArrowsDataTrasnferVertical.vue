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
                d="M5.25,14a.76.76,0,0,1-.75-.75V3.16a.25.25,0,0,0-.15-.23A.26.26,0,0,0,4.07,3L2.78,4.28A.75.75,0,0,1,1.72,3.22l3-3A.74.74,0,0,1,5.54.06.74.74,0,0,1,6,.75v12.5A.76.76,0,0,1,5.25,14Z"
            />
            <path
                d="M8.75,0A.76.76,0,0,1,9.5.75V10.84a.25.25,0,0,0,.15.23A.26.26,0,0,0,9.93,11l1.29-1.29a.75.75,0,0,1,1.06,1.06l-3,3A.75.75,0,0,1,8,13.25V.75A.76.76,0,0,1,8.75,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsDataTrasnferVertical',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
