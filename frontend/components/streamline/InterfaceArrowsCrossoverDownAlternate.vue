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
                d="M8.47,4.47A.75.75,0,0,0,9.53,5.53l4.25-4.25A.75.75,0,0,0,12.72.22Z"
            />
            <path
                d="M9,14h4.25a.76.76,0,0,0,.75-.75V9a.76.76,0,0,0-.75-.75.76.76,0,0,0-.54.23L11.3,9.89a.24.24,0,0,1-.35,0L1.28.22A.75.75,0,0,0,.22,1.28L9.89,11a.24.24,0,0,1,0,.35L8.48,12.71a.76.76,0,0,0-.23.54A.76.76,0,0,0,9,14Z"
            />
            <path
                d="M0,9v4.25A.76.76,0,0,0,.75,14H5a.76.76,0,0,0,.75-.75.74.74,0,0,0-.26-.56L4.11,11.31a.25.25,0,0,1,0-.36L5.53,9.53A.75.75,0,0,0,4.47,8.47L3.05,9.89a.25.25,0,0,1-.36,0L1.47,8.67c-.23-.22-.41-.42-.72-.42A.76.76,0,0,0,0,9Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsCrossoverDownAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
