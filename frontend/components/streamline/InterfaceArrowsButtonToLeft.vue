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
                d="M1.1,7a1.51,1.51,0,0,0,.44,1.06l5.65,5.65a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.42L3.49,7.18a.25.25,0,0,1,0-.36L8.6,1.71A1,1,0,0,0,8.6.29a1,1,0,0,0-1.41,0L1.54,5.94A1.51,1.51,0,0,0,1.1,7Z"
            />
            <path d="M10.9,1V13a1,1,0,0,0,2,0V1a1,1,0,0,0-2,0Z" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsButtonToLeft',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
