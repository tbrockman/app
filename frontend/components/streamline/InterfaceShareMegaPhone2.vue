<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.57.7A1.22,1.22,0,0,0,12.44.56L4.9,3.73H2.75a2.75,2.75,0,0,0,0,5.5H4.41a.26.26,0,0,1,.21.11.29.29,0,0,1,0,.24c-.57,1.34-1.3,3.57-.07,3.9s2.55-1.78,3.23-3a.26.26,0,0,1,.31-.12l4.4,1.57a1.57,1.57,0,0,0,.37.05,1.23,1.23,0,0,0,.71-.23A1,1,0,0,0,14,11V1.5A1,1,0,0,0,13.57.7ZM4.25,7.48A.25.25,0,0,1,4,7.73H2.75a1.25,1.25,0,0,1,0-2.5H4a.25.25,0,0,1,.25.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceShareMegaPhone2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
