<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25,7.25A.76.76,0,0,0,11.5,8,4.5,4.5,0,1,1,7,3.5H8.75A.25.25,0,0,1,9,3.75v1a.75.75,0,0,0,1.28.53l2-2a.75.75,0,0,0,0-1.06l-2-2A.75.75,0,0,0,9.46.06.74.74,0,0,0,9,.75v1A.25.25,0,0,1,8.75,2H7a6,6,0,1,0,6,6A.76.76,0,0,0,12.25,7.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsRoundRight',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
