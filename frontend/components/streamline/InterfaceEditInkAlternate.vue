<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <rect x="1.5" width="11" height="3" rx="1" />
            <path
                d="M12.63,6.54l-1.46-.48A.26.26,0,0,1,11,5.82V4.75a.25.25,0,0,0-.25-.25H3.25A.25.25,0,0,0,3,4.75V5.82a.26.26,0,0,1-.17.24l-1.46.48A2,2,0,0,0,0,8.44V12a2,2,0,0,0,2,2H12a2,2,0,0,0,2-2V8.44A2,2,0,0,0,12.63,6.54Zm-2.13,4a1,1,0,0,1-1,1h-5a1,1,0,0,1-1-1v-1a1,1,0,0,1,1-1h5a1,1,0,0,1,1,1Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditInkAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
