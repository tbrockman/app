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
                d="M14,1.25A1.25,1.25,0,0,0,12.75,0H1.25A1.25,1.25,0,0,0,0,1.25v11.5A1.25,1.25,0,0,0,1.25,14h1.5a.75.75,0,0,0,0-1.5h-1a.25.25,0,0,1-.25-.25V4.75a.25.25,0,0,1,.25-.25h10.5a.25.25,0,0,1,.25.25v7.5a.25.25,0,0,1-.25.25h-1a.75.75,0,0,0,0,1.5h1.5A1.25,1.25,0,0,0,14,12.75Z"
            />
            <path
                d="M9.76,10.23l-.17-.1a.25.25,0,0,1-.12-.25,2.42,2.42,0,0,0,0-.76.25.25,0,0,1,.12-.25l.17-.1A.75.75,0,1,0,9,7.48l-.17.09a.26.26,0,0,1-.28,0,2.22,2.22,0,0,0-.65-.38.25.25,0,0,1-.16-.23V6.75a.75.75,0,0,0-1.5,0v.19a.25.25,0,0,1-.16.23,2.22,2.22,0,0,0-.65.38.26.26,0,0,1-.28,0L5,7.48a.75.75,0,1,0-.75,1.29l.17.1a.25.25,0,0,1,.12.25,2.42,2.42,0,0,0,0,.76.25.25,0,0,1-.12.25l-.17.1a.74.74,0,0,0-.27,1,.75.75,0,0,0,.65.37.69.69,0,0,0,.37-.1l.17-.09a.26.26,0,0,1,.28,0,2.22,2.22,0,0,0,.65.38.25.25,0,0,1,.16.23v.19a.75.75,0,0,0,1.5,0v-.19a.25.25,0,0,1,.16-.23,2.22,2.22,0,0,0,.65-.38.26.26,0,0,1,.28,0l.17.09a.69.69,0,0,0,.37.1.75.75,0,0,0,.65-.37A.74.74,0,0,0,9.76,10.23ZM7,10.5a1,1,0,1,1,1-1A1,1,0,0,1,7,10.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingBrowserSetting',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
