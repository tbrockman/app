<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M1.75,5h10.5a.25.25,0,0,0,.25-.25v-3a.25.25,0,0,0-.25-.25H.75A.76.76,0,0,1,0,.75.76.76,0,0,1,.75,0h11.5A1.76,1.76,0,0,1,14,1.75v3A1.76,1.76,0,0,1,12.25,6.5H1.75a.25.25,0,0,0-.25.25v3a.25.25,0,0,0,.25.25h9.09a.25.25,0,0,0,.23-.15A.26.26,0,0,0,11,9.57l-.79-.79a.75.75,0,0,1,1.06-1.06l2.5,2.5a.75.75,0,0,1,0,1.06l-2.5,2.5a.75.75,0,0,1-1.06-1.06l.79-.79a.26.26,0,0,0,.06-.28.25.25,0,0,0-.23-.15H1.75A1.76,1.76,0,0,1,0,9.75v-3A1.76,1.76,0,0,1,1.75,5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsCurvyRight',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
