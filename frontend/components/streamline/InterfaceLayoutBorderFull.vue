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
                d="M6,6.25A.25.25,0,0,0,6.25,6V.25A.25.25,0,0,0,6,0H1.94A1.94,1.94,0,0,0,0,1.94V6a.25.25,0,0,0,.25.25Z"
            />
            <path
                d="M7.75,6A.25.25,0,0,0,8,6.25h5.75A.25.25,0,0,0,14,6V1.94A1.94,1.94,0,0,0,12.06,0H8a.25.25,0,0,0-.25.25Z"
            />
            <path
                d="M8,7.75A.25.25,0,0,0,7.75,8v5.75A.25.25,0,0,0,8,14h4.06A1.94,1.94,0,0,0,14,12.06V8a.25.25,0,0,0-.25-.25Z"
            />
            <path
                d="M6.25,8A.25.25,0,0,0,6,7.75H.25A.25.25,0,0,0,0,8v4.06A1.94,1.94,0,0,0,1.94,14H6a.25.25,0,0,0,.25-.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceLayoutBorderFull',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
