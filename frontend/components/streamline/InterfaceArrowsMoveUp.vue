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
                d="M3.22,4.53a.75.75,0,0,0,1.06,0L5.82,3a.26.26,0,0,1,.28-.06.25.25,0,0,1,.15.23V7.75a.75.75,0,0,0,1.5,0V3.16a.25.25,0,0,1,.15-.23A.26.26,0,0,1,8.18,3L9.72,4.53a.75.75,0,0,0,1.06,0,.75.75,0,0,0,0-1.06L7.53.22a.75.75,0,0,0-1.06,0L3.22,3.47A.75.75,0,0,0,3.22,4.53Z"
            />
            <rect y="10" width="14" height="4" rx="1" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsMoveUp',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
