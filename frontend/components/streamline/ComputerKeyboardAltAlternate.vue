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
                d="M.75,3.25A.76.76,0,0,0,1.5,2.5a1,1,0,0,1,1-1h9a1,1,0,0,1,1,1,.75.75,0,0,0,1.5,0A2.5,2.5,0,0,0,11.5,0h-9A2.5,2.5,0,0,0,0,2.5.76.76,0,0,0,.75,3.25Z"
            />
            <path
                d="M13.25,11a.76.76,0,0,0-.75.75.76.76,0,0,1-.75.75H2.5a1,1,0,0,1-1-1,.76.76,0,0,0-.75-.75A.76.76,0,0,0,0,11.5,2.5,2.5,0,0,0,2.5,14h9.25A2.25,2.25,0,0,0,14,11.75.76.76,0,0,0,13.25,11Z"
            />
            <path
                d="M13.25,4.25h-3a.75.75,0,0,0,0,1.5h.5A.25.25,0,0,1,11,6V9a.75.75,0,0,0,1.5,0V6a.25.25,0,0,1,.25-.25h.5a.75.75,0,0,0,0-1.5Z"
            />
            <path
                d="M6.5,4.25A.76.76,0,0,0,5.75,5V9a.76.76,0,0,0,.75.75h2a.75.75,0,0,0,0-1.5h-1A.25.25,0,0,1,7.25,8V5A.76.76,0,0,0,6.5,4.25Z"
            />
            <path
                d="M.75,9.75A.76.76,0,0,0,1.5,9V8.5a.25.25,0,0,1,.25-.25h1A.25.25,0,0,1,3,8.5V9A.75.75,0,0,0,4.5,9V6.5A2.25,2.25,0,0,0,0,6.5V9A.76.76,0,0,0,.75,9.75Zm1.5-4A.76.76,0,0,1,3,6.5a.25.25,0,0,1-.25.25h-1A.25.25,0,0,1,1.5,6.5.76.76,0,0,1,2.25,5.75Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ComputerKeyboardAltAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
