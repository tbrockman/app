<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.38,5.08a1,1,0,0,0-1.09.21L11.18,6.41a.25.25,0,0,1-.36,0L8.56,4.15a1.49,1.49,0,0,0-2.12,0L4.68,5.91a.25.25,0,0,1-.36,0L1.71,3.29A1,1,0,0,0,.29,4.71L3.44,7.85a1.49,1.49,0,0,0,2.12,0L7.32,6.09a.25.25,0,0,1,.36,0L9.41,7.82a.25.25,0,0,1,0,.36L8.29,9.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,9,11h4a1,1,0,0,0,1-1V6A1,1,0,0,0,13.38,5.08Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MoneyGraphArrowDecrease',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
