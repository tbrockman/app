<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.84,11.83,8.34.83a1.5,1.5,0,0,0-2.68,0l-5.5,11a1.49,1.49,0,0,0,.06,1.46A1.52,1.52,0,0,0,1.5,14h11a1.52,1.52,0,0,0,1.28-.71A1.49,1.49,0,0,0,13.84,11.83ZM6.25,5a.75.75,0,0,1,1.5,0V8a.75.75,0,0,1-1.5,0ZM7,12a1,1,0,1,1,1-1A1,1,0,0,1,7,12Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAlertWarningTriangle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
