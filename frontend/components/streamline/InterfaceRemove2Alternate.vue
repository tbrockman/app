<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.75,9.75H2.25A2.25,2.25,0,0,1,0,7.5v-1A2.25,2.25,0,0,1,2.25,4.25h9.5A2.25,2.25,0,0,1,14,6.5v1A2.25,2.25,0,0,1,11.75,9.75Zm-9.5-4a.76.76,0,0,0-.75.75v1a.76.76,0,0,0,.75.75h9.5a.76.76,0,0,0,.75-.75v-1a.76.76,0,0,0-.75-.75Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceRemove2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
