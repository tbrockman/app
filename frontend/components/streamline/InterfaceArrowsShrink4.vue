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
                d="M10.75,13.25A.76.76,0,0,1,10,14H1.75A1.76,1.76,0,0,1,0,12.25V4a.76.76,0,0,1,.75-.75A.76.76,0,0,1,1.5,4v8.25a.25.25,0,0,0,.25.25H10A.76.76,0,0,1,10.75,13.25Z"
            />
            <path
                d="M14,1.5A1.5,1.5,0,0,0,12.5,0h-8A1.5,1.5,0,0,0,3,1.5v8A1.5,1.5,0,0,0,4.5,11h8A1.5,1.5,0,0,0,14,9.5ZM11.28,3.78,8.74,6.32a.26.26,0,0,0-.06.28.25.25,0,0,0,.23.15H10a.75.75,0,0,1,0,1.5H6.5a.76.76,0,0,1-.75-.75V4a.75.75,0,0,1,1.5,0V5.09a.25.25,0,0,0,.15.23.26.26,0,0,0,.28-.06l2.54-2.54a.75.75,0,0,1,1.06,1.06Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsShrink4',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
