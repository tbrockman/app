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
                d="M11.5,0h-9a2,2,0,0,0-2,2V3.5a1,1,0,0,0,2,0V2.25A.25.25,0,0,1,2.75,2h3A.25.25,0,0,1,6,2.25V4A1,1,0,0,0,8,4V2.25A.25.25,0,0,1,8.25,2h3a.25.25,0,0,1,.25.25V3.5a1,1,0,0,0,2,0V2A2,2,0,0,0,11.5,0Z"
            />
            <path
                d="M12,6.5H2a1,1,0,0,0,0,2H5.75A.25.25,0,0,1,6,8.75v3a.25.25,0,0,1-.25.25H4.5a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2H8.25A.25.25,0,0,1,8,11.75v-3a.25.25,0,0,1,.25-.25H12a1,1,0,0,0,0-2Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingTextStrikeThrough',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
