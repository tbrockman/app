<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.5,9h-.75a.25.25,0,0,1-.25-.25v-8a.72.72,0,0,0-.28-.58A.72.72,0,0,0,9.59,0,7.23,7.23,0,0,0,5.45,2.7a.25.25,0,0,1-.4,0A7.23,7.23,0,0,0,.91,0,.74.74,0,0,0,0,.59a.74.74,0,0,0,.57.89S4.5,2.39,4.5,5.75a.75.75,0,0,0,1.5,0A4.23,4.23,0,0,1,8.64,2a.25.25,0,0,1,.24,0A.25.25,0,0,1,9,2.18V8.75A.25.25,0,0,1,8.75,9h-8a.75.75,0,0,0,0,1.5h8a.25.25,0,0,1,.25.25v.75A2.5,2.5,0,1,0,11.5,9Zm0,3.5a1,1,0,1,1,1-1A1,1,0,0,1,11.5,12.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EcologyScienceZodiac6',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
