<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M9.06,5.5a.26.26,0,0,1-.13-.19A.21.21,0,0,1,9,5.1l1.92-1.88a.75.75,0,0,0,.06-1L9.38.27A.75.75,0,0,0,8.8,0H5.2a.75.75,0,0,0-.58.27L3,2.21a.75.75,0,0,0,.06,1L5,5.1a.21.21,0,0,1,.07.21.26.26,0,0,1-.13.19,4.5,4.5,0,1,0,4.12,0ZM5.85,2A.29.29,0,0,1,6.05,2H8a.29.29,0,0,1,.2.09l.46.57a.25.25,0,0,1,0,.34L7.17,4.33a.25.25,0,0,1-.34,0L5.41,3a.25.25,0,0,1,0-.34ZM7,12A2.5,2.5,0,1,1,9.5,9.5,2.5,2.5,0,0,1,7,12Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'CatergoriesRing',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
