<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.78,4,9,.22A.75.75,0,0,0,8.5,0H2.75A1.76,1.76,0,0,0,1,1.75v10.5A1.76,1.76,0,0,0,2.75,14h8.5A1.76,1.76,0,0,0,13,12.25V4.5A.75.75,0,0,0,12.78,4ZM11.5,12.25a.25.25,0,0,1-.25.25H2.75a.25.25,0,0,1-.25-.25V1.75a.25.25,0,0,1,.25-.25h1A.25.25,0,0,1,4,1.75V6.29a.48.48,0,0,0,.31.46.49.49,0,0,0,.54-.1l1-1a.25.25,0,0,1,.36,0l1,1a.49.49,0,0,0,.54.1A.48.48,0,0,0,8,6.29V1.63a.13.13,0,0,1,.13-.13.13.13,0,0,1,.1,0l3.2,3.2a.26.26,0,0,1,.07.17Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFileBookmark',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
