<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.94.86A21.06,21.06,0,0,0,1.06.86,1.48,1.48,0,0,0,0,2.27V4.68a9.9,9.9,0,0,0,6.31,9.19,1.9,1.9,0,0,0,1.38,0A9.9,9.9,0,0,0,14,4.68V2.27A1.48,1.48,0,0,0,12.94.86ZM2,4.68V2.87a.26.26,0,0,1,.19-.25A19.71,19.71,0,0,1,6.75,2a.27.27,0,0,1,.18.08A.26.26,0,0,1,7,2.25v9.37a.26.26,0,0,1-.11.21.29.29,0,0,1-.24,0A7.89,7.89,0,0,1,2,4.68Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceSecurityShield4',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
