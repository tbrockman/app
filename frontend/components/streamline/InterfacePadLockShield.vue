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
                d="M8.12,5.5a.26.26,0,0,0,.26-.25v-.5a1.38,1.38,0,0,0-2.76,0v.5a.26.26,0,0,0,.26.25Z"
            />
            <path
                d="M14,1.5A1.5,1.5,0,0,0,12.5,0H1.5A1.5,1.5,0,0,0,0,1.5V4.42A10.21,10.21,0,0,0,6.46,13.9a1.51,1.51,0,0,0,1.08,0A10.21,10.21,0,0,0,14,4.42ZM10.25,9a1.5,1.5,0,0,1-1.5,1.5H5.25A1.5,1.5,0,0,1,3.75,9V7a1.5,1.5,0,0,1,.54-1.15.28.28,0,0,0,.09-.19V4.75a2.62,2.62,0,1,1,5.24,0v.91a.28.28,0,0,0,.09.19A1.5,1.5,0,0,1,10.25,7Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfacePadLockShield',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
