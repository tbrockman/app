<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.56,5.84a1,1,0,0,0,1-1V4.12a4.12,4.12,0,0,0-8.24,0V6a.25.25,0,0,1-.25.25H2.44a1,1,0,1,0,0,2H4.07a.25.25,0,0,1,.25.25V9.74a.23.23,0,0,1,0,.14L2.57,12.45a1,1,0,0,0,0,1A1,1,0,0,0,3.4,14h8.16a1,1,0,1,0,0-2H5.74a.26.26,0,0,1-.23-.13.27.27,0,0,1,0-.26l.62-.94a1,1,0,0,0,.17-.55V8.49a.25.25,0,0,1,.25-.25H8.19a1,1,0,0,0,0-2H6.57A.25.25,0,0,1,6.32,6V4.12a2.12,2.12,0,0,1,4.24,0v.72A1,1,0,0,0,11.56,5.84Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MoneyCurrencyPound',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
