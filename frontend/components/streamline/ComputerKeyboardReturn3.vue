<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1.5A1.5,1.5,0,0,0,12.5,0H1.5A1.5,1.5,0,0,0,0,1.5v11A1.5,1.5,0,0,0,1.5,14h11A1.5,1.5,0,0,0,14,12.5Zm-3.75,6A1.76,1.76,0,0,1,8.5,9.25h-2a.25.25,0,0,0-.25.25v1a.74.74,0,0,1-.46.69A.74.74,0,0,1,5,11L3,9A.75.75,0,0,1,3,8L5,6a.75.75,0,0,1,.82-.16.74.74,0,0,1,.46.69v1a.25.25,0,0,0,.25.25h2a.25.25,0,0,0,.25-.25v-3a.75.75,0,0,1,1.5,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerKeyboardReturn3',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
