<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M8.57,12.07H8.5A1.52,1.52,0,0,1,7.13,11L5.45,5.39a.26.26,0,0,0-.22-.18A.27.27,0,0,0,5,5.35L4,7.25a1.49,1.49,0,0,1-1.34.83H1a1,1,0,0,1,0-2H2.23a.24.24,0,0,0,.22-.14L4,2.76a1.51,1.51,0,0,1,1.47-.82A1.49,1.49,0,0,1,6.82,3L8.43,8.37a.25.25,0,0,0,.47,0L9.45,7a1.48,1.48,0,0,1,1.39-.94H13a1,1,0,0,1,0,2H11.35a.25.25,0,0,0-.24.16L10,11.12A1.51,1.51,0,0,1,8.57,12.07Zm2.73-4.3Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceSignalGraph',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
