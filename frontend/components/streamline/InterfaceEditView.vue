<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="7" cy="7" r="2" />
            <path
                d="M13.47,5.65l-.14-.15C12.2,4.28,10.1,2,7,2S1.8,4.28.67,5.5l-.14.15a2,2,0,0,0,0,2.7l.14.15C1.8,9.72,3.9,12,7,12s5.2-2.28,6.33-3.5l.14-.15A2,2,0,0,0,13.47,5.65ZM11.83,7.17C10.53,8.57,9,10,7,10S3.47,8.57,2.17,7.17a.25.25,0,0,1,0-.34C3.49,5.41,5,4,7,4s3.51,1.41,4.83,2.83A.25.25,0,0,1,11.83,7.17Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditView',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
