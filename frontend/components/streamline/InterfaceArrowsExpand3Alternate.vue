<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path
                d="M8.53,6.53,11.07,4a.25.25,0,0,1,.35,0l1.3,1.3a.72.72,0,0,0,.53.22A.76.76,0,0,0,14,4.75v-4A.76.76,0,0,0,13.25,0h-4A.76.76,0,0,0,8.5.75a.73.73,0,0,0,.22.53L10,2.57a.25.25,0,0,1,0,.36L7.47,5.47A.75.75,0,0,0,8.53,6.53Z"
            />
            <path
                d="M5.47,7.47,2.93,10a.25.25,0,0,1-.35,0l-1.3-1.3A.72.72,0,0,0,.75,8.5.76.76,0,0,0,0,9.25v4A.76.76,0,0,0,.75,14h4a.76.76,0,0,0,.75-.75.73.73,0,0,0-.22-.53L4,11.43a.25.25,0,0,1,0-.36L6.53,8.53A.75.75,0,0,0,5.47,7.47Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsExpand3Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
