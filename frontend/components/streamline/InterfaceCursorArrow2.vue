<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.33,4,2,.08A1.53,1.53,0,0,0,.44.44,1.51,1.51,0,0,0,.08,2L4,13.33A1,1,0,0,0,5,14H5a1,1,0,0,0,.93-.68L7.85,8A.23.23,0,0,1,8,7.85l5.31-1.93A1,1,0,0,0,14,5,1,1,0,0,0,13.33,4Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceCursorArrow2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
