<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M4,12.5a2,2,0,0,1-1.55-.78L.25,9.23A1,1,0,0,1,.34,7.81a1,1,0,0,1,1.41.1l2.06,2.33a.21.21,0,0,0,.18.09.23.23,0,0,0,.18-.08l8.11-8.44a1,1,0,0,1,1.44,1.38l-8.2,8.63A1.94,1.94,0,0,1,4,12.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceValidationCheck',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
