<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM9.45,3.5a.63.63,0,0,1,.13.88L7.68,6.91a.22.22,0,0,0-.06.15v.62a.26.26,0,0,0,.26.25h.74a.63.63,0,0,1,0,1.25H7.88a.26.26,0,0,0-.26.25v.82a.62.62,0,1,1-1.24,0V9.43a.26.26,0,0,0-.26-.25H5.38a.63.63,0,0,1,0-1.25h.74a.26.26,0,0,0,.26-.25V7.06a.22.22,0,0,0-.06-.15L4.42,4.38a.63.63,0,0,1,.13-.88.62.62,0,0,1,.87.12L6.8,5.46a.25.25,0,0,0,.4,0L8.58,3.62A.62.62,0,0,1,9.45,3.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MoneyCurrencyYuanCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
