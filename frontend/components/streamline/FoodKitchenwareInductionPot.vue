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
                d="M13.25,1.5h-1A.25.25,0,0,1,12,1.25V1a1,1,0,0,0-1-1H3A1,1,0,0,0,2,1v.25a.25.25,0,0,1-.25.25h-1A.75.75,0,0,0,.75,3h1A.25.25,0,0,1,2,3.25V5.5a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V3.25A.25.25,0,0,1,12.25,3h1a.75.75,0,0,0,0-1.5Z"
            />
            <path
                d="M11.25,12.5H2.75a.75.75,0,0,0,0,1.5h8.5a.75.75,0,0,0,0-1.5Z"
            />
            <path d="M4.75,10.5v-1a.75.75,0,0,0-1.5,0v1a.75.75,0,0,0,1.5,0Z" />
            <path d="M10.75,10.5v-1a.75.75,0,0,0-1.5,0v1a.75.75,0,0,0,1.5,0Z" />
            <path d="M7.75,10.5v-1a.75.75,0,0,0-1.5,0v1a.75.75,0,0,0,1.5,0Z" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodKitchenwareInductionPot',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
