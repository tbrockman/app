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
                d="M13.78,1.28,11.49,3.57a.25.25,0,0,0,0,.35l1.3,1.3a.72.72,0,0,1,.22.53.76.76,0,0,1-.75.75h-4a.76.76,0,0,1-.75-.75v-4A.76.76,0,0,1,8.25,1a.73.73,0,0,1,.53.22l1.29,1.29a.25.25,0,0,0,.36,0L12.72.22a.75.75,0,0,1,1.06,1.06Z"
            />
            <path
                d="M.22,12.72l2.29-2.29a.25.25,0,0,0,0-.35l-1.3-1.3A.72.72,0,0,1,1,8.25a.76.76,0,0,1,.75-.75h4a.76.76,0,0,1,.75.75v4a.76.76,0,0,1-.75.75.73.73,0,0,1-.53-.22L3.93,11.49a.25.25,0,0,0-.36,0L1.28,13.78A.75.75,0,0,1,.22,12.72Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsShrink3Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
