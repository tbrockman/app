<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,5.5a2,2,0,0,0-2-2H6.93a.24.24,0,0,1-.21-.12L5.49,1.25A.52.52,0,0,0,5.06,1H2A2,2,0,0,0,0,3v8a2,2,0,0,0,2,2H12a2,2,0,0,0,2-2Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFolder',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
