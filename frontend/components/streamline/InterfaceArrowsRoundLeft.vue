<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13,8A6,6,0,0,0,7,2H5.25A.25.25,0,0,1,5,1.75v-1A.74.74,0,0,0,4.54.06a.75.75,0,0,0-.82.16l-2,2a.75.75,0,0,0,0,1.06l2,2A.75.75,0,0,0,5,4.75v-1a.25.25,0,0,1,.25-.25H7A4.5,4.5,0,1,1,2.5,8,.75.75,0,0,0,1,8,6,6,0,0,0,13,8Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsRoundLeft',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
