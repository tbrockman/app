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
                d="M10.5,9H.25A.25.25,0,0,0,0,9.25v4.5A.25.25,0,0,0,.25,14H10.5a2.5,2.5,0,0,0,0-5ZM2,12.5a1,1,0,1,1,1-1A1,1,0,0,1,2,12.5Zm3.75,0a1,1,0,1,1,1-1A1,1,0,0,1,5.75,12.5Zm3.75,0a1,1,0,1,1,1-1A1,1,0,0,1,9.5,12.5Z"
            />
            <rect y="2.5" width="5" height="5" rx="0.5" />
            <path
                d="M10.5,7A3.5,3.5,0,1,1,14,3.5,3.5,3.5,0,0,1,10.5,7Zm0-5.5a2,2,0,1,0,2,2A2,2,0,0,0,10.5,1.5Z"
            />
            <path
                d="M10.5,4.25A.74.74,0,0,1,10,4,.75.75,0,0,1,10,3l.75-.75a.75.75,0,0,1,1.06,1.06L11,4A.74.74,0,0,1,10.5,4.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ShoppingBusinessProductionBeltTime',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
