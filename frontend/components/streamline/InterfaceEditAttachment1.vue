<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M5.38,14a3.2,3.2,0,0,1-2.3-.95L1.62,11.59a3.24,3.24,0,0,1,0-4.6L8.1.51a1.75,1.75,0,0,1,2.47,0l1.09,1.08a1.76,1.76,0,0,1,0,2.48l-5,5A.75.75,0,0,1,5.56,8.05l5-5a.27.27,0,0,0,.07-.18.24.24,0,0,0-.07-.17L9.51,1.57a.24.24,0,0,0-.35,0L2.68,8.05a1.74,1.74,0,0,0,0,2.48L4.14,12a1.8,1.8,0,0,0,2.48,0l5.44-5.44a.75.75,0,0,1,1.06,1.06L7.68,13.05A3.21,3.21,0,0,1,5.38,14Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditAttachment1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
