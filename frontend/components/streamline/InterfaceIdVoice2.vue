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
                d="M1,4.5a1,1,0,0,1-1-1V2A2,2,0,0,1,2,0H3.5a1,1,0,0,1,0,2H2.25A.25.25,0,0,0,2,2.25V3.5A1,1,0,0,1,1,4.5Z"
            />
            <path
                d="M13,4.5a1,1,0,0,1-1-1V2.25A.25.25,0,0,0,11.75,2H10.5a1,1,0,0,1,0-2H12a2,2,0,0,1,2,2V3.5A1,1,0,0,1,13,4.5Z"
            />
            <path
                d="M3.5,14H2a2,2,0,0,1-2-2V10.5a1,1,0,0,1,2,0v1.25a.25.25,0,0,0,.25.25H3.5a1,1,0,0,1,0,2Z"
            />
            <path
                d="M14,12a2,2,0,0,1-2,2H10.5a1,1,0,0,1,0-2h1.25a.25.25,0,0,0,.25-.25V10.5a1,1,0,0,1,2,0Z"
            />
            <path
                d="M7,10H7a.77.77,0,0,1-.66-.47L5.17,6.69a.25.25,0,0,0-.23-.16.24.24,0,0,0-.23.14L4.18,7.81a.75.75,0,0,1-.68.44H1.75a.75.75,0,0,1,0-1.5H2.86a.25.25,0,0,0,.23-.15L4.32,3.94A.7.7,0,0,1,5,3.5.76.76,0,0,1,5.7,4L6.89,7a.25.25,0,0,0,.22.15A.24.24,0,0,0,7.35,7L8.59,4.65a.75.75,0,0,1,1.3,0l1.28,2.14h1.08a.75.75,0,0,1,0,1.5h-1.5a.75.75,0,0,1-.64-.36l-.59-1a.26.26,0,0,0-.22-.13.3.3,0,0,0-.22.14L7.66,9.6A.74.74,0,0,1,7,10Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceIdVoice2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
