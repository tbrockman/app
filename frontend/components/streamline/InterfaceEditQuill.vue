<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.3.47A10.23,10.23,0,0,0,0,9.77,11,11,0,0,0,.5,13.48a.75.75,0,0,0,.94.49.77.77,0,0,0,.49-1,9,9,0,0,1-.36-1.69.24.24,0,0,1,.08-.21.23.23,0,0,1,.21-.07A10.24,10.24,0,0,0,14,1.46,1,1,0,0,0,13.3.47Zm-3,5.58a.25.25,0,0,1-.18.1.27.27,0,0,1-.19-.08l-1.2-1.2a.75.75,0,0,0-1.06,0,.74.74,0,0,0,0,1.06l1.2,1.2a.26.26,0,0,1,0,.38A8.21,8.21,0,0,1,3.77,9.23,7.82,7.82,0,0,1,2.32,9.1a.25.25,0,0,1-.2-.28A8.22,8.22,0,0,1,10.24,2a7.82,7.82,0,0,1,1.45.13.25.25,0,0,1,.2.29A8.25,8.25,0,0,1,10.28,6.05Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditQuill',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
