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
                d="M7,10.25a3.25,3.25,0,0,1,0-6.5.76.76,0,0,1,.75.75v5A.76.76,0,0,1,7,10.25ZM6.25,5.88a.25.25,0,0,0-.15-.23.25.25,0,0,0-.27,0,1.75,1.75,0,0,0,0,2.6.25.25,0,0,0,.27,0,.25.25,0,0,0,.15-.23Z"
            />
            <path
                d="M7,2.75A.76.76,0,0,1,6.25,2V.75a.75.75,0,0,1,1.5,0V2A.76.76,0,0,1,7,2.75Z"
            />
            <path
                d="M3.32,4.07a.77.77,0,0,1-.53-.22l-.92-.92A.75.75,0,0,1,2.93,1.87l.92.92a.75.75,0,0,1,0,1.06A.79.79,0,0,1,3.32,4.07Z"
            />
            <path d="M2,7.75H.75a.75.75,0,0,1,0-1.5H2a.75.75,0,0,1,0,1.5Z" />
            <path
                d="M2.4,12.35a.79.79,0,0,1-.53-.22.75.75,0,0,1,0-1.06l.92-.92a.75.75,0,1,1,1.06,1.06l-.92.92A.75.75,0,0,1,2.4,12.35Z"
            />
            <path
                d="M7,14a.76.76,0,0,1-.75-.75V12a.75.75,0,0,1,1.5,0v1.25A.76.76,0,0,1,7,14Z"
            />
            <path
                d="M11.6,12.35a.75.75,0,0,1-.53-.22l-.92-.92a.75.75,0,1,1,1.06-1.06l.92.92a.75.75,0,0,1,0,1.06A.79.79,0,0,1,11.6,12.35Z"
            />
            <path
                d="M13.25,7.75H12a.75.75,0,0,1,0-1.5h1.25a.75.75,0,0,1,0,1.5Z"
            />
            <path
                d="M10.68,4.07a.79.79,0,0,1-.53-.22.75.75,0,0,1,0-1.06l.92-.92a.75.75,0,1,1,1.06,1.06l-.92.92A.77.77,0,0,1,10.68,4.07Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceLightingBrightness2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
