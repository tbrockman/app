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
                d="M3.6,8.9a.48.48,0,0,0-.7,0l-1,1a.24.24,0,0,1-.35,0l-.22-.22A.75.75,0,0,0,.22,10.78l3,3a.75.75,0,0,0,1.06,0,.75.75,0,0,0,0-1.06l-.22-.22a.24.24,0,0,1,0-.35l1-1.05a.48.48,0,0,0,0-.7Z"
            />
            <path
                d="M13.78,4,10,.22A.75.75,0,0,0,8.9.3L4.15,6.55a.75.75,0,0,0,.07,1L6.47,9.78a.75.75,0,0,0,1,.07L13.7,5.1a.75.75,0,0,0,.3-.55A.77.77,0,0,0,13.78,4Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EcologyScienceTelescope',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
