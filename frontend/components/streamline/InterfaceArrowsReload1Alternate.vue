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
                d="M8.76,8.5a.75.75,0,0,0-.54,1.28L10.47,12a.75.75,0,0,0,1.06,0l2.25-2.25a.75.75,0,0,0-.54-1.28H12a.25.25,0,0,1-.25-.25V1.75A1.75,1.75,0,0,0,10,0H7.75A.76.76,0,0,0,7,.75a.76.76,0,0,0,.75.75H10a.25.25,0,0,1,.25.25v6.5A.25.25,0,0,1,10,8.5Z"
            />
            <path
                d="M5.24,5.5a.75.75,0,0,0,.54-1.28L3.53,2A.75.75,0,0,0,2.47,2L.22,4.22A.75.75,0,0,0,.76,5.5H2a.25.25,0,0,1,.25.25v6.5A1.75,1.75,0,0,0,4,14H6.25a.75.75,0,0,0,0-1.5H4a.25.25,0,0,1-.25-.25V5.75A.25.25,0,0,1,4,5.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsReload1Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
