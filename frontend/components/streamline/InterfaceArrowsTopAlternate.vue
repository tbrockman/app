<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path
                d="M7.71,4.29a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,0,1.42A1,1,0,0,0,4,9H5.75A.25.25,0,0,1,6,9.25V13a1,1,0,0,0,2,0V9.25A.25.25,0,0,1,8.25,9H10a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"
            />
            <path d="M10.5,0h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsTopAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
