<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,5.5A4.75,4.75,0,0,0,9.25.75H6.75a.75.75,0,0,0,0,1.5h2.5a3.25,3.25,0,0,1,0,6.5H4.75A.25.25,0,0,1,4.5,8.5v-2A.74.74,0,0,0,4,5.81.75.75,0,0,0,3.22,6l-3,3A.75.75,0,0,0,.22,10l3,3a.74.74,0,0,0,.82.16.74.74,0,0,0,.46-.69v-2a.25.25,0,0,1,.25-.25h4.5A4.75,4.75,0,0,0,14,5.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerKeyboardReturn2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
