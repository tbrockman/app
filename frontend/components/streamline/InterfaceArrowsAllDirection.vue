<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.78,7.53a.75.75,0,0,0,0-1.06l-2-2A.75.75,0,0,0,11,4.31.74.74,0,0,0,10.5,5V6a.25.25,0,0,1-.25.25H8A.25.25,0,0,1,7.75,6V3.75A.25.25,0,0,1,8,3.5H9A.74.74,0,0,0,9.69,3a.75.75,0,0,0-.16-.82l-2-2a.75.75,0,0,0-1.06,0l-2,2A.75.75,0,0,0,4.31,3,.74.74,0,0,0,5,3.5H6a.25.25,0,0,1,.25.25V6A.25.25,0,0,1,6,6.25H3.75A.25.25,0,0,1,3.5,6V5a.75.75,0,0,0-1.28-.53l-2,2a.75.75,0,0,0,0,1.06l2,2a.77.77,0,0,0,.53.22A.75.75,0,0,0,3,9.69.74.74,0,0,0,3.5,9V8a.25.25,0,0,1,.25-.25H6A.25.25,0,0,1,6.25,8v2.25A.25.25,0,0,1,6,10.5H5a.74.74,0,0,0-.69.46.75.75,0,0,0,.16.82l2,2a.75.75,0,0,0,1.06,0l2-2A.75.75,0,0,0,9.69,11,.74.74,0,0,0,9,10.5H8a.25.25,0,0,1-.25-.25V8A.25.25,0,0,1,8,7.75h2.25A.25.25,0,0,1,10.5,8V9a.74.74,0,0,0,.46.69.75.75,0,0,0,.29.06.77.77,0,0,0,.53-.22Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsAllDirection',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
