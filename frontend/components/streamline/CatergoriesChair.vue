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
                d="M2.5,5A2.5,2.5,0,0,1,5,7.5V8.75A.25.25,0,0,0,5.25,9h3.5A.25.25,0,0,0,9,8.75V7.5A2.5,2.5,0,0,1,11.5,5h.25A.25.25,0,0,0,12,4.75v-1A2.75,2.75,0,0,0,9.25,1H4.75A2.75,2.75,0,0,0,2,3.75v1A.25.25,0,0,0,2.25,5Z"
            />
            <path
                d="M12.5,6h-1A1.5,1.5,0,0,0,10,7.5V9.75a.25.25,0,0,1-.25.25H4.25A.25.25,0,0,1,4,9.75V7.5A1.5,1.5,0,0,0,2.5,6h-1A1.5,1.5,0,0,0,0,7.5V13a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V7.5A1.5,1.5,0,0,0,12.5,6Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'CatergoriesChair',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
