<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,3.7a2.19,2.19,0,0,0-2.2-2.2H2.2A2.19,2.19,0,0,0,0,3.7v6.8a2,2,0,0,0,2,2A1.6,1.6,0,0,0,3.59,11a1.61,1.61,0,0,1,1.6-1.5H8.81a1.61,1.61,0,0,1,1.6,1.5A1.6,1.6,0,0,0,12,12.5a2,2,0,0,0,2-2ZM5.5,6.25H4.75a.25.25,0,0,0-.25.25v.75a.75.75,0,0,1-1.5,0V6.5a.25.25,0,0,0-.25-.25H2a.75.75,0,0,1,0-1.5h.75A.25.25,0,0,0,3,4.5V3.75a.75.75,0,0,1,1.5,0V4.5a.25.25,0,0,0,.25.25H5.5a.75.75,0,0,1,0,1.5Zm5,.75A1.5,1.5,0,1,1,12,5.5,1.5,1.5,0,0,1,10.5,7Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerController2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
