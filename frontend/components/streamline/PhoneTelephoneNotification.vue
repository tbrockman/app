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
                d="M9.75,8a.25.25,0,0,0-.25.25v3a.25.25,0,0,1-.25.25H2.75a.25.25,0,0,1-.25-.25V1.75a.25.25,0,0,1,.25-.25H4.6a.25.25,0,0,0,.24-.16A4.07,4.07,0,0,1,5.35.4a.25.25,0,0,0,0-.26A.24.24,0,0,0,5.15,0H2.75A1.76,1.76,0,0,0,1,1.75v10.5A1.76,1.76,0,0,0,2.75,14h6.5A1.76,1.76,0,0,0,11,12.25v-4A.25.25,0,0,0,10.75,8Z"
            />
            <path
                d="M12.2,4.52a.25.25,0,0,1-.2-.24V3A3,3,0,0,0,6,3V4.28a.25.25,0,0,1-.2.24,1,1,0,0,0,.2,2H7.78A.25.25,0,0,1,8,6.7a1,1,0,0,0,2,0,.25.25,0,0,1,.24-.2H12a1,1,0,0,0,.2-2Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'PhoneTelephoneNotification',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
