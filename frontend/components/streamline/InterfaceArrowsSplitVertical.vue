<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11,12A3,3,0,0,1,8,9V4a.26.26,0,0,1,.43-.18L10.79,6.2A1,1,0,0,0,12.2,4.79L7.71.29A1,1,0,0,0,6.3.29L1.8,4.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L5.58,3.84a.25.25,0,0,1,.27,0A.25.25,0,0,1,6,4V9a3,3,0,0,1-3,3,1,1,0,0,0,0,2,5,5,0,0,0,3.81-1.76A.25.25,0,0,1,7,12.15a.22.22,0,0,1,.19.09A5,5,0,0,0,11,14a1,1,0,0,0,0-2Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsSplitVertical',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
