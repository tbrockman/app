<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,.5a7,7,0,0,0-7,7v4a2,2,0,0,0,2,2H3.75A1.5,1.5,0,0,0,5.25,12V8.5A1.5,1.5,0,0,0,3.75,7h-1a1.5,1.5,0,0,0-1.15.54s0,0-.06,0,0,0,0,0a5.5,5.5,0,0,1,11,0s0,0,0,0-.05,0-.06,0A1.5,1.5,0,0,0,11.25,7h-1a1.5,1.5,0,0,0-1.5,1.5V12a1.5,1.5,0,0,0,1.5,1.5H12a2,2,0,0,0,2-2v-4A7,7,0,0,0,7,.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceHelpCustomerSupport4',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
