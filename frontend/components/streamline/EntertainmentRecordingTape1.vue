<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13,9.5a1,1,0,0,0-1,1v1a.5.5,0,0,1-1,0v-6A5.5,5.5,0,1,0,5.5,11,5.45,5.45,0,0,0,9,9.74V11.5a2.5,2.5,0,0,0,5,0v-1A1,1,0,0,0,13,9.5ZM2.5,6.5a1,1,0,1,1,1-1A1,1,0,0,1,2.5,6.5Zm3,3a1,1,0,1,1,1-1A1,1,0,0,1,5.5,9.5Zm0-6a1,1,0,1,1,1-1A1,1,0,0,1,5.5,3.5Zm3,3a1,1,0,1,1,1-1A1,1,0,0,1,8.5,6.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentRecordingTape1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
