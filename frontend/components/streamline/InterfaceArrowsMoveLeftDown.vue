<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.94,11a.74.74,0,0,0-.69-.46h-1a.25.25,0,0,1-.25-.25V3.75A1.76,1.76,0,0,0,10.25,2H3.75a.25.25,0,0,1-.25-.25v-1A.74.74,0,0,0,3,.06a.74.74,0,0,0-.82.16l-2,2a.75.75,0,0,0,0,1.06l2,2A.75.75,0,0,0,3.5,4.75v-1a.25.25,0,0,1,.25-.25h6.5a.25.25,0,0,1,.25.25v6.5a.25.25,0,0,1-.25.25h-1a.74.74,0,0,0-.69.46.75.75,0,0,0,.16.82l2,2a.75.75,0,0,0,1.06,0l2-2A.75.75,0,0,0,13.94,11Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsMoveLeftDown',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
