<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7.29.79a1,1,0,0,0,0,1.42l2.87,2.86a.26.26,0,0,1,.05.28A.25.25,0,0,1,10,5.5H5a5,5,0,0,0-5,5v2a1,1,0,0,0,2,0v-2a3,3,0,0,1,3-3h5a.25.25,0,0,1,.23.15.26.26,0,0,1-.05.28L7.29,10.79a1,1,0,1,0,1.42,1.42l5-5a1,1,0,0,0,0-1.42l-5-5A1,1,0,0,0,7.29.79Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsBendUpRight2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
