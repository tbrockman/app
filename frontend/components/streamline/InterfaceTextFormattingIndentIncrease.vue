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
                d="M13.25,1.75H.75A.76.76,0,0,1,0,1,.76.76,0,0,1,.75.25h12.5A.76.76,0,0,1,14,1,.76.76,0,0,1,13.25,1.75Z"
            />
            <path
                d="M13.25,5.75H6a.75.75,0,0,1,0-1.5h7.25a.75.75,0,0,1,0,1.5Z"
            />
            <path
                d="M13.25,9.75H6a.75.75,0,0,1,0-1.5h7.25a.75.75,0,0,1,0,1.5Z"
            />
            <path
                d="M13.25,13.75H.75a.75.75,0,0,1,0-1.5h12.5a.75.75,0,0,1,0,1.5Z"
            />
            <path
                d="M.22,9.53a.75.75,0,0,1,0-1.06L1.51,7.18a.25.25,0,0,0,0-.36L.22,5.53A.75.75,0,0,1,1.28,4.47l2,2a.75.75,0,0,1,0,1.06l-2,2A.75.75,0,0,1,.22,9.53Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingIndentIncrease',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
