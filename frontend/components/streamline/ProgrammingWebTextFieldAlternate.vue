<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,3.5a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1Zm-8,2a.76.76,0,0,1-.75.75h-.5a.25.25,0,0,0-.25.25v2A.75.75,0,0,1,3,8.5v-2a.25.25,0,0,0-.25-.25h-.5a.75.75,0,0,1,0-1.5h3A.76.76,0,0,1,6,5.5ZM8.75,9.25h-2a.75.75,0,0,1,0-1.5h2a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingWebTextFieldAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
