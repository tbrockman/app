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
                d="M14,7.54a.5.5,0,0,0-.5-.54H7.41L6,7.53A.92.92,0,0,0,5.53,9l1.1,1.47a.3.3,0,0,1,0,.15v1.23A.23.23,0,0,1,6.6,12a.31.31,0,0,1-.2.07,5.1,5.1,0,0,1-4.47-4.6A.5.5,0,0,0,1.43,7H.52a.52.52,0,0,0-.37.16A.52.52,0,0,0,0,7.54a7,7,0,0,0,14,0Z"
            />
            <path
                d="M4,4.34l.09-.1a.26.26,0,0,1,.28,0,.24.24,0,0,1,.15.23V5a.5.5,0,0,0,.5.5H6a.25.25,0,0,0,.25-.25V4.5a.75.75,0,0,1,1.5,0v.75A.25.25,0,0,0,8,5.5H9A.5.5,0,0,0,9.5,5V4.42a.24.24,0,0,1,.15-.23.26.26,0,0,1,.28,0l.09.1a.59.59,0,0,0,.41.16.57.57,0,0,0,.4-.16.55.55,0,0,0,0-.8L7.4.16a.59.59,0,0,0-.8,0L3.17,3.54a.55.55,0,0,0,0,.8A.6.6,0,0,0,4,4.34Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'NatureEcologyWorldHome',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
