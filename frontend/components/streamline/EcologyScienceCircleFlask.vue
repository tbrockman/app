<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,14A5.26,5.26,0,0,1,1.75,8.75,5.19,5.19,0,0,1,4.14,4.37a.26.26,0,0,0,.11-.21V.75A.76.76,0,0,1,5,0H9a.76.76,0,0,1,.75.75V4.16a.26.26,0,0,0,.11.21,5.19,5.19,0,0,1,2.39,4.38A5.26,5.26,0,0,1,7,14ZM6,1.5a.25.25,0,0,0-.25.25v3a.75.75,0,0,1-.42.67,3.75,3.75,0,1,0,3.34,0,.75.75,0,0,1-.42-.67v-3A.25.25,0,0,0,8,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EcologyScienceCircleFlask',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
