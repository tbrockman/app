<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,4.25a.76.76,0,0,0-.75-.75H10.5a.25.25,0,0,1-.25-.25,3.25,3.25,0,0,0-6.5,0,.25.25,0,0,1-.25.25H.75A.75.75,0,0,0,.75,5H2a.25.25,0,0,1,.25.25v7A1.76,1.76,0,0,0,4,14h6a1.76,1.76,0,0,0,1.75-1.75v-7A.25.25,0,0,1,12,5h1.25A.76.76,0,0,0,14,4.25ZM7,1.5A1.76,1.76,0,0,1,8.75,3.25a.25.25,0,0,1-.25.25h-3a.25.25,0,0,1-.25-.25A1.76,1.76,0,0,1,7,1.5Zm3.25,10.75a.25.25,0,0,1-.25.25H4a.25.25,0,0,1-.25-.25v-7A.25.25,0,0,1,4,5h6a.25.25,0,0,1,.25.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceDeleteBin5Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
