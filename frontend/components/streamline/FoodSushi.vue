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
                d="M11.5,9.65a1.25,1.25,0,0,1-1.25,1.25H3.75A1.25,1.25,0,0,1,2.5,9.65v-.5A.25.25,0,0,0,2.41,9a.27.27,0,0,0-.21-.05l-1,.22A.26.26,0,0,0,1,9.38v.27A2.75,2.75,0,0,0,3.75,12.4h6.5A2.75,2.75,0,0,0,13,9.65V9.38a.26.26,0,0,0-.19-.25l-1-.22a.27.27,0,0,0-.21.05.25.25,0,0,0-.09.19Z"
            />
            <path
                d="M8.47,2.93a.25.25,0,0,0,.08-.27.25.25,0,0,0-.21-.18A11.63,11.63,0,0,0,7,2.4c-3.87,0-7,1.9-7,4.25v.59a.51.51,0,0,0,.62.49L1,7.64H1c.53-.13,1.23-.28,2.07-.41l.11-.05Z"
            />
            <path
                d="M10.84,3.1a.28.28,0,0,0-.25,0L6.46,6.46a.26.26,0,0,0,.17.45H7q.52,0,1,0a24.34,24.34,0,0,1,2.79.28l.79.13c.55.1,1,.21,1.4.3h0l.38.09h.15a.47.47,0,0,0,.28-.09.5.5,0,0,0,.19-.4V6.65C14,5.17,12.74,3.86,10.84,3.1Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodSushi',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
