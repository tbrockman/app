<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0A7,7,0,0,0,7,14a.75.75,0,0,0,0-1.5A5.5,5.5,0,1,1,12.5,7V8.5a1,1,0,0,1-1,1A.5.5,0,0,1,11,9V7A4,4,0,1,0,9.73,9.92,2,2,0,0,0,11.5,11,2.5,2.5,0,0,0,14,8.5V7A7,7,0,0,0,7,0ZM7,9.5A2.5,2.5,0,1,1,9.5,7,2.5,2.5,0,0,1,7,9.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MailSignAt',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
