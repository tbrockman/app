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
                d="M6.15,8.15l2.58-.58A1.06,1.06,0,0,0,9.2,7.3l4.51-4.51a1,1,0,0,0,0-1.41L12.62.29a1,1,0,0,0-1.41,0L6.7,4.8a1.06,1.06,0,0,0-.27.47L5.85,7.85a.23.23,0,0,0,.07.23A.25.25,0,0,0,6.15,8.15Z"
            />
            <path
                d="M10.26,8.36A2.49,2.49,0,0,1,9.09,9l-3,.64h0A1.76,1.76,0,0,1,4.4,7.48L5,4.94a2.59,2.59,0,0,1,.67-1.2L7.37,2a.25.25,0,0,0,.06-.26.27.27,0,0,0-.19-.17,6.4,6.4,0,0,0-1-.08A6.25,6.25,0,1,0,12.5,7.75a6.5,6.5,0,0,0-.08-1A.26.26,0,0,0,12,6.63Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditWriteCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
