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
                d="M1,5A1,1,0,0,1,0,4V2A2,2,0,0,1,2,0H4A1,1,0,0,1,4,2H2V4A1,1,0,0,1,1,5Z"
            />
            <path
                d="M13,5a1,1,0,0,1-1-1V2H10a1,1,0,0,1,0-2h2a2,2,0,0,1,2,2V4A1,1,0,0,1,13,5Z"
            />
            <path
                d="M4,14H2a2,2,0,0,1-2-2V10a1,1,0,0,1,2,0v2H4a1,1,0,0,1,0,2Z"
            />
            <path
                d="M12,14H10a1,1,0,0,1,0-2h2V10a1,1,0,0,1,2,0v2A2,2,0,0,1,12,14Z"
            />
            <circle cx="7" cy="5" r="2" />
            <path
                d="M10.12,10.5a.5.5,0,0,0,.45-.28.49.49,0,0,0-.06-.53,4.49,4.49,0,0,0-7,0,.49.49,0,0,0-.06.53.5.5,0,0,0,.45.28Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUserProfileFocus',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
