<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13,2.5H1a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1v-7A1,1,0,0,0,13,2.5ZM5,9.25H3a.75.75,0,0,1,0-1.5.25.25,0,0,0,.25-.25v-1A.25.25,0,0,0,3,6.25a.75.75,0,0,1,0-1.5H4a.76.76,0,0,1,.75.75v2A.25.25,0,0,0,5,7.75a.75.75,0,0,1,0,1.5Zm4.5,0h-2a.75.75,0,0,1,0-1.5h2a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingWebNumberFieldAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
