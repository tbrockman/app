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
                d="M1,14a.76.76,0,0,1-.75-.75V7.5C.25,3.36,3.28,0,7,0s6.75,3.36,6.75,7.5V8.75a.75.75,0,0,1-1.5,0V7.5c0-3.31-2.35-6-5.25-6s-5.25,2.69-5.25,6v5.75A.76.76,0,0,1,1,14Z"
            />
            <path
                d="M4,14a.76.76,0,0,1-.75-.75V11.5a.75.75,0,0,1,1.5,0v1.75A.76.76,0,0,1,4,14Z"
            />
            <path
                d="M10,14a.76.76,0,0,1-.75-.75v-5c0-1.63-1-3-2.25-3s-2.25,1.37-2.25,3a.75.75,0,0,1-1.5,0c0-2.48,1.68-4.5,3.75-4.5s3.75,2,3.75,4.5v5A.76.76,0,0,1,10,14Z"
            />
            <path
                d="M7,14a.76.76,0,0,1-.75-.75V12a.75.75,0,0,1,1.5,0v1.25A.76.76,0,0,1,7,14Z"
            />
            <path
                d="M7,10a.76.76,0,0,1-.75-.75V7.75a.75.75,0,0,1,1.5,0v1.5A.76.76,0,0,1,7,10Z"
            />
            <path
                d="M13,14a.76.76,0,0,1-.75-.75v-1.5a.75.75,0,0,1,1.5,0v1.5A.76.76,0,0,1,13,14Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceIdFingerPrint',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
