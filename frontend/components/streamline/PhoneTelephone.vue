<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M8.89,13.46A3.44,3.44,0,0,0,13.18,13l.48-.48a1.14,1.14,0,0,0,0-1.62l-2-2a1.14,1.14,0,0,0-1.62,0h0a1.14,1.14,0,0,1-1.62,0L5.14,5.61A1.14,1.14,0,0,1,5.14,4h0a1.14,1.14,0,0,0,0-1.62l-2-2a1.14,1.14,0,0,0-1.62,0L1,.82A3.45,3.45,0,0,0,.54,5.11,31.29,31.29,0,0,0,8.89,13.46Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'PhoneTelephone',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
