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
                d="M2.5,3.25v3A.76.76,0,0,0,3.25,7h3A.76.76,0,0,0,7,6.25v-3a.76.76,0,0,0-.75-.75h-3A.76.76,0,0,0,2.5,3.25Zm1.5,1A.25.25,0,0,1,4.25,4h1a.25.25,0,0,1,.25.25v1a.25.25,0,0,1-.25.25h-1A.25.25,0,0,1,4,5.25Z"
            />
            <path
                d="M.75,4a.76.76,0,0,0,.75-.75V1.75a.25.25,0,0,1,.25-.25h1.5A.76.76,0,0,0,4,.75.76.76,0,0,0,3.25,0H.75A.76.76,0,0,0,0,.75v2.5A.76.76,0,0,0,.75,4Z"
            />
            <path
                d="M13.25,0h-2.5A.76.76,0,0,0,10,.75a.76.76,0,0,0,.75.75h1.5a.25.25,0,0,1,.25.25v1.5a.75.75,0,0,0,1.5,0V.75A.76.76,0,0,0,13.25,0Z"
            />
            <path
                d="M3.25,12.5H1.75a.25.25,0,0,1-.25-.25v-1.5A.76.76,0,0,0,.75,10a.76.76,0,0,0-.75.75v2.5A.76.76,0,0,0,.75,14h2.5a.75.75,0,0,0,0-1.5Z"
            />
            <path
                d="M13.25,10a.76.76,0,0,0-.75.75v1.5a.25.25,0,0,1-.25.25h-1.5a.75.75,0,0,0,0,1.5h2.5a.76.76,0,0,0,.75-.75v-2.5A.76.76,0,0,0,13.25,10Z"
            />
            <path
                d="M4.19,10A.24.24,0,0,1,4,9.78v-1a.75.75,0,0,0-1.5,0v2a.76.76,0,0,0,.75.75H4A.75.75,0,0,0,4.19,10Z"
            />
            <path
                d="M6.5,8a.76.76,0,0,0-.75.75v2a.75.75,0,0,0,1.5,0v-2A.76.76,0,0,0,6.5,8Z"
            />
            <path
                d="M8.75,4.75h2a.75.75,0,0,0,0-1.5h-1a.24.24,0,0,1-.24-.19A.75.75,0,0,0,8,3.25V4A.76.76,0,0,0,8.75,4.75Z"
            />
            <path
                d="M9.75,7.25A.25.25,0,0,1,10,7.5v.25a.75.75,0,0,0,1.5,0V6.5a.76.76,0,0,0-.75-.75h-2a.75.75,0,0,0,0,1.5Z"
            />
            <path
                d="M11.5,10.75a.76.76,0,0,0-.75-.75H10a.25.25,0,0,1-.25-.25V9.5a.75.75,0,0,0-1.5,0v1.25A.76.76,0,0,0,9,11.5h1.75A.76.76,0,0,0,11.5,10.75Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MoneyCashierQrCode',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
