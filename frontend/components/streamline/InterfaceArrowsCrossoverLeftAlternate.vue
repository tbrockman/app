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
                d="M9.53,8.47A.75.75,0,0,0,8.47,9.53l4.25,4.25a.75.75,0,0,0,1.06-1.06Z"
            />
            <path
                d="M0,9v4.25A.76.76,0,0,0,.75,14H5a.76.76,0,0,0,.75-.75.76.76,0,0,0-.23-.54L4.11,11.3a.24.24,0,0,1,0-.35l9.67-9.67A.75.75,0,0,0,12.72.22L3.05,9.89a.24.24,0,0,1-.35,0L1.29,8.48a.76.76,0,0,0-.54-.23A.76.76,0,0,0,0,9Z"
            />
            <path
                d="M5,0H.75A.76.76,0,0,0,0,.75V5a.76.76,0,0,0,.75.75.74.74,0,0,0,.56-.26L2.69,4.11a.25.25,0,0,1,.36,0L4.47,5.53A.75.75,0,0,0,5.53,4.47L4.11,3.05a.25.25,0,0,1,0-.36L5.33,1.47c.22-.23.42-.41.42-.72A.76.76,0,0,0,5,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsCrossoverLeftAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
