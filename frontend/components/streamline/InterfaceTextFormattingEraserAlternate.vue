<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path d="M13.25,12.5h-9a.75.75,0,0,0,0,1.5h9a.75.75,0,0,0,0-1.5Z" />
            <path
                d="M6.69,11a2,2,0,0,0,1.41-.58l3.67-3.68a2,2,0,0,0,0-2.81L8.42.58a2,2,0,0,0-2.81,0l-5,5a2,2,0,0,0,0,2.82l2,2A2,2,0,0,0,4,11ZM1.64,7.36A.52.52,0,0,1,1.5,7a.5.5,0,0,1,.14-.35l5-5A.5.5,0,0,1,7,1.5a.49.49,0,0,1,.34.14L10.71,5a.45.45,0,0,1,.15.35.45.45,0,0,1-.15.34L7,9.36a.5.5,0,0,1-.35.14H4a.48.48,0,0,1-.34-.14Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingEraserAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
