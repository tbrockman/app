<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.5,4a1,1,0,0,0-1,1V9.75a.75.75,0,0,1-1.5,0V3A1.5,1.5,0,0,0,8.5,1.5h-7A1.5,1.5,0,0,0,0,3v7a2.5,2.5,0,0,0,2.5,2.5h9A2.5,2.5,0,0,0,14,10V5.5A1.5,1.5,0,0,0,12.5,4Zm-5,5h-5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1ZM8,5.5a.5.5,0,0,1-.5.5h-5A.5.5,0,0,1,2,5.5V4a.5.5,0,0,1,.5-.5h5A.5.5,0,0,1,8,4Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentNewsPaper',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
