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
                d="M13.71,7.5a1,1,0,0,1-1.42,0L7.18,2.38a.27.27,0,0,0-.36,0L1.71,7.5a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.41L5.94.44a1.49,1.49,0,0,1,2.12,0l5.65,5.65A1,1,0,0,1,13.71,7.5Z"
            />
            <path
                d="M12.29,13.71,7.18,8.59a.25.25,0,0,0-.36,0L1.71,13.71A1,1,0,0,1,.29,12.29L5.94,6.65a1.49,1.49,0,0,1,2.12,0l5.65,5.64a1,1,0,0,1-1.42,1.42Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsButtonUpDouble',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
