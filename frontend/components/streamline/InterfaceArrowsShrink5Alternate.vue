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
                d="M1.75,0h10.5A1.76,1.76,0,0,1,14,1.75v10.5A1.76,1.76,0,0,1,12.25,14h-4a.75.75,0,0,1,0-1.5h4a.25.25,0,0,0,.25-.25V1.75a.25.25,0,0,0-.25-.25H1.75a.25.25,0,0,0-.25.25v4a.76.76,0,0,1-.75.75A.76.76,0,0,1,0,5.75v-4A1.76,1.76,0,0,1,1.75,0Z"
            />
            <path
                d="M0,9.75A.76.76,0,0,1,.75,9a.76.76,0,0,1,.54.24l1,1a.24.24,0,0,0,.35,0l3.8-3.8A.75.75,0,0,1,7.53,7.53l-3.8,3.8a.24.24,0,0,0,0,.35l1,1a.76.76,0,0,1,.23.53.76.76,0,0,1-.75.75H.75A.76.76,0,0,1,0,13.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsShrink5Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
