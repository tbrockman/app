<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.71,4.71a1,1,0,0,0,0-1.42l-2-2a1,1,0,0,0-1.42,0L6.17,5.42a.26.26,0,0,1-.3,0A3.93,3.93,0,0,0,4,5,4,4,0,1,0,8,9a3.93,3.93,0,0,0-.47-1.87.24.24,0,0,1,0-.29l.92-.93a.29.29,0,0,1,.18-.07.26.26,0,0,1,.17.07L10,7A.75.75,0,0,0,11,7,.75.75,0,0,0,11,6L9.91,4.85a.26.26,0,0,1,0-.35l.91-.91a.25.25,0,0,1,.36,0l1.11,1.12A1,1,0,0,0,13.71,4.71ZM4,11A2,2,0,1,1,6,9,2,2,0,0,1,4,11Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceLoginKey',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
