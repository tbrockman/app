<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.41,4.9a.74.74,0,0,0-.66-.4h-3a.25.25,0,0,1-.25-.25V.75A.75.75,0,0,0,7.13.33l-5.5,8A.75.75,0,0,0,2.25,9.5h3a.25.25,0,0,1,.25.25v3.5A.75.75,0,0,0,6,14a.83.83,0,0,0,.22,0,.77.77,0,0,0,.62-.32l5.5-8A.75.75,0,0,0,12.41,4.9Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ImageFlash2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
