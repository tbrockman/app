<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.5,3.31a1,1,0,0,0-.32-.73,1,1,0,0,0-.75-.27A4.75,4.75,0,0,1,7.83.44,1,1,0,0,0,6.2.4,4.83,4.83,0,0,1,1.59,2.31a1,1,0,0,0-1.09,1V5.87a8.4,8.4,0,0,0,5.29,7.79A3.2,3.2,0,0,0,7,14a3.2,3.2,0,0,0,1.21-.34A8.4,8.4,0,0,0,13.5,5.87Zm-7,8.49a6.38,6.38,0,0,1-4-5.93V4.58a.25.25,0,0,1,.24-.25A6.62,6.62,0,0,0,6.59,2.86a.26.26,0,0,1,.27,0A.26.26,0,0,1,7,3.05v8.57a.26.26,0,0,1-.11.21.27.27,0,0,1-.23,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceSecurityShield2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
