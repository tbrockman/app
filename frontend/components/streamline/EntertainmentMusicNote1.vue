<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.33,2.08l-4-2A.75.75,0,0,0,6.25.75V8.42a.26.26,0,0,1-.11.21.28.28,0,0,1-.22,0A2.82,2.82,0,0,0,5,8.5a2.75,2.75,0,1,0,2.75,2.75V4.37a.25.25,0,0,1,.12-.22.29.29,0,0,1,.24,0l2.56,1.28a.73.73,0,0,0,.72,0,.74.74,0,0,0,.36-.64v-2A.75.75,0,0,0,11.33,2.08Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentMusicNote1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
