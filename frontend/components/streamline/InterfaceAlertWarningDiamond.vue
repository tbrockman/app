<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.54,5.88,8.11.45a1.61,1.61,0,0,0-2.22,0L.46,5.88A1.55,1.55,0,0,0,0,7,1.53,1.53,0,0,0,.46,8.1l5.43,5.43a1.57,1.57,0,0,0,2.22,0L13.54,8.1A1.53,1.53,0,0,0,14,7,1.55,1.55,0,0,0,13.54,5.88ZM6.25,3.49a.75.75,0,0,1,1.5,0v3a.75.75,0,0,1-1.5,0Zm.75,7a1,1,0,1,1,1-1A1,1,0,0,1,7,10.49Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceAlertWarningDiamond',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
