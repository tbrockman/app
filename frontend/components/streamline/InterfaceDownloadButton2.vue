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
                d="M10,5.22A.75.75,0,0,0,9,5.22L8.18,6a.26.26,0,0,1-.28.06.25.25,0,0,1-.15-.23V.75a.75.75,0,0,0-1.5,0V5.84a.25.25,0,0,1-.15.23A.26.26,0,0,1,5.82,6L5,5.22A.75.75,0,0,0,4,5.22.75.75,0,0,0,4,6.28l2.5,2.5a.75.75,0,0,0,1.06,0L10,6.28A.75.75,0,0,0,10,5.22Z"
            />
            <path
                d="M13,9.5a1,1,0,0,0-1,1v1.25a.25.25,0,0,1-.25.25H2.25A.25.25,0,0,1,2,11.75V10.5a1,1,0,0,0-2,0V12a2,2,0,0,0,2,2H12a2,2,0,0,0,2-2V10.5A1,1,0,0,0,13,9.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceDownloadButton2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
