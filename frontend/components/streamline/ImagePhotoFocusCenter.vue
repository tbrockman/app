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
                d="M.75,4.5A.76.76,0,0,1,0,3.75v-1A1.76,1.76,0,0,1,1.75,1h1a.75.75,0,0,1,0,1.5h-1a.25.25,0,0,0-.25.25v1A.76.76,0,0,1,.75,4.5Z"
            />
            <path
                d="M13.25,4.5a.76.76,0,0,1-.75-.75v-1a.25.25,0,0,0-.25-.25h-1a.75.75,0,0,1,0-1.5h1A1.76,1.76,0,0,1,14,2.75v1A.76.76,0,0,1,13.25,4.5Z"
            />
            <path
                d="M12.25,13h-1a.75.75,0,0,1,0-1.5h1a.25.25,0,0,0,.25-.25v-1a.75.75,0,0,1,1.5,0v1A1.76,1.76,0,0,1,12.25,13Z"
            />
            <path
                d="M2.75,13h-1A1.76,1.76,0,0,1,0,11.25v-1A.76.76,0,0,1,.75,9.5a.76.76,0,0,1,.75.75v1a.25.25,0,0,0,.25.25h1a.75.75,0,0,1,0,1.5Z"
            />
            <circle cx="7" cy="7" r="2.5" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ImagePhotoFocusCenter',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
