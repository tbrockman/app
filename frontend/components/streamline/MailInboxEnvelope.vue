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
                d="M10.28,3A.75.75,0,0,0,9.22,3l-1,1a.26.26,0,0,1-.28.06.25.25,0,0,1-.15-.23V.75a.75.75,0,0,0-1.5,0V3.84a.25.25,0,0,1-.15.23A.26.26,0,0,1,5.82,4l-1-1A.75.75,0,1,0,3.72,4L6.47,6.78a.75.75,0,0,0,1.06,0L10.28,4A.75.75,0,0,0,10.28,3Z"
            />
            <path
                d="M12.25,8a1.5,1.5,0,0,0-1.5-1.5H10a.29.29,0,0,0-.18.07L8.59,7.84a2.25,2.25,0,0,1-3.18,0L4.14,6.57A.29.29,0,0,0,4,6.5H3.25A1.5,1.5,0,0,0,1.75,8v4.5A1.5,1.5,0,0,0,3.25,14h7.5a1.5,1.5,0,0,0,1.5-1.5ZM10.38,9.65l-3,1.75a.77.77,0,0,1-.76,0l-3-1.75a.75.75,0,1,1,.76-1.3L6.87,9.81a.3.3,0,0,0,.26,0L9.62,8.35a.76.76,0,0,1,1,.27A.75.75,0,0,1,10.38,9.65Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MailInboxEnvelope',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
