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
                d="M13.89,2.64a.75.75,0,0,0-.25-1L11.14.11a.74.74,0,0,0-.76,0A.75.75,0,0,0,10,.75v2.5a.23.23,0,0,1-.08.18.21.21,0,0,1-.18.07H9.5a2,2,0,1,0,2,2v-3a.26.26,0,0,1,.38-.22l1,.59A.75.75,0,0,0,13.89,2.64Z"
            />
            <path
                d="M13.25,4.5a.25.25,0,0,0-.25.25V5.5A3.5,3.5,0,1,1,8.33,2.2.26.26,0,0,0,8.5,2V.75A2.12,2.12,0,0,1,8.55.31a.28.28,0,0,0,0-.22A.25.25,0,0,0,8.31,0H1.75A1.76,1.76,0,0,0,0,1.75v7.5A1.76,1.76,0,0,0,1.75,11H5a.26.26,0,0,1,.21.11.29.29,0,0,1,0,.24L4.56,13a.75.75,0,0,0,.69,1h3.5a.75.75,0,0,0,.69-1l-.67-1.61a.29.29,0,0,1,0-.24A.26.26,0,0,1,9,11h3.25A1.76,1.76,0,0,0,14,9.25V4.69a.25.25,0,0,0-.09-.2.28.28,0,0,0-.22,0A2,2,0,0,1,13.25,4.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ComputerDesktopMusic',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
