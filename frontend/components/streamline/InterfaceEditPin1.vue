<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M9.5,0A4.49,4.49,0,0,0,5,4.5a4.55,4.55,0,0,0,.59,2.23.24.24,0,0,1,0,.3L.29,12.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L7,8.45a.24.24,0,0,1,.3,0A4.55,4.55,0,0,0,9.5,9a4.5,4.5,0,0,0,0-9ZM9,4a1,1,0,1,1,1-1A1,1,0,0,1,9,4Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditPin1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
