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
                d="M12.25,5a.25.25,0,0,1,.25.25.75.75,0,0,0,1.5,0A1.76,1.76,0,0,0,12.25,3.5a.75.75,0,0,0,0,1.5Z"
            />
            <path
                d="M13.25,11.5a.76.76,0,0,0-.75.75.25.25,0,0,1-.25.25.75.75,0,0,0,0,1.5A1.76,1.76,0,0,0,14,12.25.76.76,0,0,0,13.25,11.5Z"
            />
            <path
                d="M5.25,12.5A.25.25,0,0,1,5,12.25a.75.75,0,0,0-1.5,0A1.76,1.76,0,0,0,5.25,14a.75.75,0,0,0,0-1.5Z"
            />
            <path d="M9.5,12.5H8A.75.75,0,0,0,8,14H9.5a.75.75,0,0,0,0-1.5Z" />
            <path
                d="M13.25,7.25A.76.76,0,0,0,12.5,8V9.5a.75.75,0,0,0,1.5,0V8A.76.76,0,0,0,13.25,7.25Z"
            />
            <rect width="10" height="10" rx="1.5" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditPathfinderMerge',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
