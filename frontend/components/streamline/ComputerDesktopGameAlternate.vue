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
                d="M6,5H5.25A.25.25,0,0,1,5,4.75V4A.75.75,0,0,0,3.5,4v.75A.25.25,0,0,1,3.25,5H2.5a.75.75,0,0,0,0,1.5h.75a.25.25,0,0,1,.25.25V7.5A.75.75,0,0,0,5,7.5V6.75a.25.25,0,0,1,.25-.25H6A.75.75,0,0,0,6,5Z"
            />
            <circle cx="9" cy="6.75" r="1" />
            <circle cx="11.5" cy="5" r="1" />
            <path
                d="M12.5,2.75a.75.75,0,0,0,1.5,0v-1A1.76,1.76,0,0,0,12.25,0H1.75A1.76,1.76,0,0,0,0,1.75v1a.76.76,0,0,0,.75.75.76.76,0,0,0,.75-.75v-1a.25.25,0,0,1,.25-.25h10.5a.25.25,0,0,1,.25.25Z"
            />
            <path
                d="M12.5,8.75a.75.75,0,0,1,1.5,0v.5A1.76,1.76,0,0,1,12.25,11H9a.26.26,0,0,0-.21.11.29.29,0,0,0,0,.24L9.44,13a.75.75,0,0,1-.69,1H5.25a.75.75,0,0,1-.69-1l.67-1.61a.29.29,0,0,0,0-.24A.26.26,0,0,0,5,11H1.75A1.76,1.76,0,0,1,0,9.25v-.5A.76.76,0,0,1,.75,8a.76.76,0,0,1,.75.75v.5a.25.25,0,0,0,.25.25h10.5a.25.25,0,0,0,.25-.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ComputerDesktopGameAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
