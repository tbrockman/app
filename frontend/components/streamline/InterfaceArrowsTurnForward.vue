<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M9.71.29l4,4a1,1,0,0,1,0,1.42l-4,4A1,1,0,0,1,8.29,8.29l1.87-1.86a.26.26,0,0,0,.05-.28A.25.25,0,0,0,10,6H5a3,3,0,0,0,0,6H7a1,1,0,0,1,0,2H5A5,5,0,0,1,5,4h5a.25.25,0,0,0,.23-.15.26.26,0,0,0-.05-.28L8.29,1.71A1,1,0,0,1,9.71.29Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsTurnForward',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
