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
                d="M1.57,8.26A1,1,0,0,1,.8,7.9,4.78,4.78,0,0,1,.69,2.75a1,1,0,0,1,1.75,1,2.94,2.94,0,0,0-.1,2.91,1,1,0,0,1-.77,1.63Z"
            />
            <path
                d="M5.08,8.26a1,1,0,0,1-.77-.36A4.8,4.8,0,0,1,4.2,2.75,1,1,0,0,1,6,3.72a2.94,2.94,0,0,0-.1,2.91,1,1,0,0,1-.77,1.63Z"
            />
            <path
                d="M12.43,11.76a1,1,0,0,1-.77-1.63,2.94,2.94,0,0,0-.1-2.91A1,1,0,0,1,12,5.86a1,1,0,0,1,1.36.39,4.78,4.78,0,0,1-.11,5.15A1,1,0,0,1,12.43,11.76Z"
            />
            <path
                d="M8.92,11.76a1,1,0,0,1-.77-1.63,2.94,2.94,0,0,0-.1-2.91,1,1,0,0,1,.39-1.36,1,1,0,0,1,1.36.39,4.8,4.8,0,0,1-.11,5.15A1,1,0,0,1,8.92,11.76Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTextFormattingQuotation1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
