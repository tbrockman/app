<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1.93A1.92,1.92,0,0,0,12.08,0H1.92A1.92,1.92,0,0,0,0,1.93V4.64a9.94,9.94,0,0,0,6.31,9.23,1.9,1.9,0,0,0,1.38,0h0A9.94,9.94,0,0,0,14,4.64ZM2,4.64V2.25A.25.25,0,0,1,2.25,2h4.5A.25.25,0,0,1,7,2.25v9.37a.26.26,0,0,1-.11.21.29.29,0,0,1-.24,0A8,8,0,0,1,2,4.64Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceSecurityShield1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
