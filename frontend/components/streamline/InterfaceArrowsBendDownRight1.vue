<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.21,7.29a1,1,0,0,0-1.42,0L8.93,10.16a.26.26,0,0,1-.28.05A.25.25,0,0,1,8.5,10V5a5,5,0,0,0-5-5h-2a1,1,0,0,0,0,2h2a3,3,0,0,1,3,3v5a.25.25,0,0,1-.15.23.26.26,0,0,1-.28-.05L3.21,7.29A1,1,0,1,0,1.79,8.71l5,5a1,1,0,0,0,1.42,0l5-5A1,1,0,0,0,13.21,7.29Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsBendDownRight1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
