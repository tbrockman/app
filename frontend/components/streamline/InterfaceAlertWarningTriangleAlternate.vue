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
                d="M7,8.5a.76.76,0,0,1-.75-.75V5.25a.75.75,0,0,1,1.5,0v2.5A.76.76,0,0,1,7,8.5Z"
            />
            <circle cx="7" cy="10.5" r="1" />
            <path
                d="M12.29,14H1.71A1.71,1.71,0,0,1,.18,11.52L5.47,1A1.71,1.71,0,0,1,8.53,1l5.29,10.57A1.71,1.71,0,0,1,12.29,14ZM7,1.5a.21.21,0,0,0-.19.12L1.52,12.19a.21.21,0,0,0,.19.31H12.29a.21.21,0,0,0,.19-.31L7.19,1.62A.21.21,0,0,0,7,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAlertWarningTriangleAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
