<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M8.25,8.5A.25.25,0,0,1,8,8.25V1A1,1,0,0,0,6,1V8.25a.25.25,0,0,1-.25.25H3.5a1,1,0,0,0-.71.29,1,1,0,0,0,0,1.42l3.5,3.5a1,1,0,0,0,1.42,0l3.5-3.5a1,1,0,0,0,0-1.42,1,1,0,0,0-.71-.29Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsDownAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
