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
                d="M12,11.5H2a.5.5,0,0,0-.5.5v.5A1.5,1.5,0,0,0,3,14h8a1.5,1.5,0,0,0,1.5-1.5V12A.5.5,0,0,0,12,11.5Z"
            />
            <path
                d="M10.5,5.5a1,1,0,0,1-1-1v-2a2.5,2.5,0,0,0-5,0v2a1,1,0,0,1-1,1H2a2,2,0,0,0-2,2V9a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V7.5a2,2,0,0,0-2-2Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditBrush4',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
