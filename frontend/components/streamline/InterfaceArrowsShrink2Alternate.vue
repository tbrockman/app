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
                d="M.22,1.28,2.51,3.57a.25.25,0,0,1,0,.35l-1.3,1.3A.72.72,0,0,0,1,5.75a.76.76,0,0,0,.75.75h4a.76.76,0,0,0,.75-.75v-4A.76.76,0,0,0,5.75,1a.73.73,0,0,0-.53.22L3.93,2.51a.25.25,0,0,1-.36,0L1.28.22A.75.75,0,0,0,.22,1.28Z"
            />
            <path
                d="M13.78,12.72l-2.29-2.29a.25.25,0,0,1,0-.35l1.3-1.3A.72.72,0,0,0,13,8.25a.76.76,0,0,0-.75-.75h-4a.76.76,0,0,0-.75.75v4a.76.76,0,0,0,.75.75.73.73,0,0,0,.53-.22l1.29-1.29a.25.25,0,0,1,.36,0l2.29,2.29a.75.75,0,0,0,1.06-1.06Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsShrink2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
