<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M9.7,0,9,0H8.22A3.25,3.25,0,0,0,4.89,3.59v1a.25.25,0,0,1-.25.25H4.32a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h.32a.25.25,0,0,1,.25.25v5.07a.78.78,0,0,0,.77.77H7.55a.77.77,0,0,0,.77-.77V8.16a.25.25,0,0,1,.25-.25H9a1,1,0,0,0,1-1v-1a1,1,0,0,0-1-1H8.57a.25.25,0,0,1-.25-.25V3.89c0-.83.25-.83.73-.83h.63a1.07,1.07,0,0,0,.74-.3,1.05,1.05,0,0,0,.3-.74V1.07A1,1,0,0,0,9.7,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerLogoFacebook2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
