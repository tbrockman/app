<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path d="M.75,5.5h9a.75.75,0,0,0,0-1.5h-9a.75.75,0,0,0,0,1.5Z" />
            <path
                d="M.75,1.5h12.5A.76.76,0,0,0,14,.75.76.76,0,0,0,13.25,0H.75A.76.76,0,0,0,0,.75.76.76,0,0,0,.75,1.5Z"
            />
            <path
                d="M12.25,14H1.75A1.76,1.76,0,0,1,0,12.25V9.75A1.76,1.76,0,0,1,1.75,8h10.5A1.76,1.76,0,0,1,14,9.75v2.5A1.76,1.76,0,0,1,12.25,14ZM1.75,9.5a.25.25,0,0,0-.25.25v2.5a.25.25,0,0,0,.25.25h10.5a.25.25,0,0,0,.25-.25V9.75a.25.25,0,0,0-.25-.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingImageBottomAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
