<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1.5A1.5,1.5,0,0,0,12.5,0H1.5A1.5,1.5,0,0,0,0,1.5v11A1.5,1.5,0,0,0,1.5,14h11A1.5,1.5,0,0,0,14,12.5Zm-8.75,10a.76.76,0,0,1-.75-.75V8.5a.25.25,0,0,0-.25-.25H2.75A.75.75,0,0,1,2.22,7L6.47,2.72a.75.75,0,0,1,1.06,0L11.78,7a.75.75,0,0,1-.53,1.28H9.75a.25.25,0,0,0-.25.25v2.25a.76.76,0,0,1-.75.75Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerKeyboardShift',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
