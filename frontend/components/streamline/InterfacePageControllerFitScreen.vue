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
                d="M1,5.5a1,1,0,0,1-1-1v-3A1.5,1.5,0,0,1,1.5,0h3a1,1,0,0,1,0,2H2.25A.25.25,0,0,0,2,2.25V4.5A1,1,0,0,1,1,5.5Z"
            />
            <path
                d="M13,5.5a1,1,0,0,1-1-1V2.25A.25.25,0,0,0,11.75,2H9.5a1,1,0,0,1,0-2h3A1.5,1.5,0,0,1,14,1.5v3A1,1,0,0,1,13,5.5Z"
            />
            <path
                d="M12.5,14h-3a1,1,0,0,1,0-2h2.25a.25.25,0,0,0,.25-.25V9.5a1,1,0,0,1,2,0v3A1.5,1.5,0,0,1,12.5,14Z"
            />
            <path
                d="M4.5,14h-3A1.5,1.5,0,0,1,0,12.5v-3a1,1,0,0,1,2,0v2.25a.25.25,0,0,0,.25.25H4.5a1,1,0,0,1,0,2Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfacePageControllerFitScreen',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
