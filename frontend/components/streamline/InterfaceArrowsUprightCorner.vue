<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13,14a1,1,0,0,1-1-1V2.25A.25.25,0,0,0,11.75,2H1A1,1,0,0,1,1,0H12a2,2,0,0,1,2,2V13A1,1,0,0,1,13,14Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsUprightCorner',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
