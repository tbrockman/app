<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0Zm3.6,5.9-4,4a1,1,0,0,1-.7.3,1,1,0,0,1-.71-.3L3.4,8.07A1,1,0,0,1,4.82,6.65l.92.93a.29.29,0,0,0,.18.07.26.26,0,0,0,.17-.07L9.18,4.49a1,1,0,0,1,1.42,0A1,1,0,0,1,10.6,5.9Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceValidationCheckCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
