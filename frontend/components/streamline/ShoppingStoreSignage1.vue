<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <rect y="5.98" width="14" height="8" rx="1.75" />
            <path
                d="M4.17,5a.72.72,0,0,1-.42-.13.75.75,0,0,1-.21-1L5.6.73a1.74,1.74,0,0,1,2.8,0l2.06,3.08a.75.75,0,0,1-.21,1,.74.74,0,0,1-1-.21L7.15,1.56a.19.19,0,0,0-.3,0L4.79,4.64A.74.74,0,0,1,4.17,5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ShoppingStoreSignage1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
