<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.5,0H.5A.5.5,0,0,0,0,.5V7A7,7,0,0,0,14,7V.5A.5.5,0,0,0,13.5,0ZM3,4.75a.75.75,0,0,1-1.5,0,2.25,2.25,0,0,1,4.5,0,.75.75,0,0,1-1.5,0,.75.75,0,0,0-1.5,0ZM10.71,9c0,.08-.7,2-3.71,2S3.32,9.07,3.29,9A.75.75,0,0,1,4.71,8.5c0,.06.44,1,2.29,1s2.28-1,2.29-1a.76.76,0,0,1,1-.43A.73.73,0,0,1,10.71,9Zm1-3.49A.76.76,0,0,1,11,4.75a.75.75,0,0,0-1.5,0,.75.75,0,0,1-1.5,0,2.25,2.25,0,0,1,4.5,0A.76.76,0,0,1,11.75,5.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MailSmileyHappyMask',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
