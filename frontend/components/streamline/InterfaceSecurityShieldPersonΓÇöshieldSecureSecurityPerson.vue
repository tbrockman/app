<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="4.75" cy="2.75" r="2.75" />
            <path
                d="M14,9.32V8a1,1,0,0,0-1-1H8A1,1,0,0,0,7,8V9.32a5,5,0,0,0,3.15,4.62,1.05,1.05,0,0,0,.7,0h0A5,5,0,0,0,14,9.32Z"
            />
            <path
                d="M5.5,9.32V8a.86.86,0,0,1,0-.16.25.25,0,0,0-.23-.27,4.58,4.58,0,0,0-.53,0A4.75,4.75,0,0,0,0,12.25V13a1,1,0,0,0,1,1H6.93a.25.25,0,0,0,.23-.15.25.25,0,0,0,0-.26A6.49,6.49,0,0,1,5.5,9.32Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceSecurityShieldPersonΓÇöshieldSecureSecurityPerson',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
