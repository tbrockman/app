<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11,3H10a.25.25,0,0,1-.25-.25v-1A1.76,1.76,0,0,0,8,0H3A1.76,1.76,0,0,0,1.25,1.75v7.5A1.76,1.76,0,0,0,3,11H4a.25.25,0,0,1,.25.25v1A1.76,1.76,0,0,0,6,14h5a1.76,1.76,0,0,0,1.75-1.75V4.75A1.76,1.76,0,0,0,11,3ZM3,9.5a.25.25,0,0,1-.25-.25V1.75A.25.25,0,0,1,3,1.5H8a.25.25,0,0,1,.25.25v1A.25.25,0,0,1,8,3H6A1.76,1.76,0,0,0,4.25,4.75v4.5A.25.25,0,0,1,4,9.5Zm8.25,2.75a.25.25,0,0,1-.25.25H6a.25.25,0,0,1-.25-.25V4.75A.25.25,0,0,1,6,4.5h5a.25.25,0,0,1,.25.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditShowLayerAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
