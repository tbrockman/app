<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.5,11.56,9.91,2.23a1,1,0,0,0-1.29-.57L5.82,2.73l0,0a.26.26,0,0,1-.24,0,.26.26,0,0,1-.11-.21V1a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1V13a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V5.85a.27.27,0,0,1,.21-.25.25.25,0,0,1,.27.16l2.93,7.6a1,1,0,0,0,.93.64.92.92,0,0,0,.36-.07l2.8-1.07A1,1,0,0,0,13.5,11.56ZM2.93,11.5a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,2.93,11.5Zm7.7-.44a1.25,1.25,0,1,1,.72-1.61A1.24,1.24,0,0,1,10.63,11.06Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceContentBook2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
