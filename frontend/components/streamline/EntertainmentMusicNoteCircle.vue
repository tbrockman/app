<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0Zm3.14,5.89a.75.75,0,0,1-1,.25l-1-.59a.26.26,0,0,0-.38.22v3a2,2,0,1,1-2-2H6a.21.21,0,0,0,.18-.07.23.23,0,0,0,.08-.18V4a.75.75,0,0,1,.38-.65.74.74,0,0,1,.76,0l2.5,1.5A.75.75,0,0,1,10.14,5.89Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentMusicNoteCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
