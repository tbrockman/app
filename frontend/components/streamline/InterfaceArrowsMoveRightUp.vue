<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.78,10.72l-2-2A.75.75,0,0,0,11,8.56a.74.74,0,0,0-.46.69v1a.25.25,0,0,1-.25.25H3.75a.25.25,0,0,1-.25-.25V3.75a.25.25,0,0,1,.25-.25h1A.74.74,0,0,0,5.44,3a.75.75,0,0,0-.16-.82l-2-2a.75.75,0,0,0-1.06,0l-2,2A.75.75,0,0,0,.06,3a.74.74,0,0,0,.69.46h1A.25.25,0,0,1,2,3.75v6.5A1.76,1.76,0,0,0,3.75,12h6.5a.25.25,0,0,1,.25.25v1a.75.75,0,0,0,1.28.53l2-2A.75.75,0,0,0,13.78,10.72Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsMoveRightUp',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
