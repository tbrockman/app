<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M5.75,5.5A.25.25,0,0,1,6,5.75V13a1,1,0,0,0,2,0V5.75a.25.25,0,0,1,.25-.25H10.5a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L7.71.29a1,1,0,0,0-1.42,0l-3.5,3.5a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsUpAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
