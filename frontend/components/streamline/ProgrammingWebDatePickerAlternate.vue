<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13,2.5H1a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1v-7A1,1,0,0,0,13,2.5ZM5.71,5.74l-1,3A.75.75,0,0,1,4,9.25a.67.67,0,0,1-.24,0,.75.75,0,0,1-.47-1l1-3a.75.75,0,0,1,1.42.48Zm5,0-1,3A.75.75,0,0,1,9,9.25a.67.67,0,0,1-.24,0,.75.75,0,0,1-.47-1l1-3a.75.75,0,0,1,1.42.48Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingWebDatePickerAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
