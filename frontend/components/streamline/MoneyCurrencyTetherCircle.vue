<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM5,3.25H9a.75.75,0,0,1,0,1.5H8A.25.25,0,0,0,7.75,5V6a.75.75,0,0,1-1.5,0V5A.25.25,0,0,0,6,4.75H5a.75.75,0,0,1,0-1.5Zm2.75,8a.75.75,0,0,1-1.5,0v-.5a.75.75,0,0,1,1.5,0ZM7,9.25C4.89,9.25,2.75,8.48,2.75,7a.75.75,0,0,1,1.5,0c.08.2,1,.75,2.75.75S9.67,7.2,9.75,7a.74.74,0,0,1,.75-.74.76.76,0,0,1,.75.76C11.25,8.48,9.11,9.25,7,9.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MoneyCurrencyTetherCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
