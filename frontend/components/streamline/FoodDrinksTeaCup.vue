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
                d="M11.25,3.5H1.5a1,1,0,0,0-1,1v4A2.5,2.5,0,0,0,3,11H8a2.5,2.5,0,0,0,2.45-2h.8a2.75,2.75,0,0,0,0-5.5Zm0,4h-.5a.25.25,0,0,1-.25-.25v-2A.25.25,0,0,1,10.75,5h.5a1.25,1.25,0,0,1,0,2.5Z"
            />
            <path
                d="M4,2.5a.76.76,0,0,1-.75-.75v-.5a.75.75,0,0,1,1.5,0v.5A.76.76,0,0,1,4,2.5Z"
            />
            <path
                d="M7,2.5a.76.76,0,0,1-.75-.75v-1a.75.75,0,0,1,1.5,0v1A.76.76,0,0,1,7,2.5Z"
            />
            <path d="M10.75,14H.75a.75.75,0,0,1,0-1.5h10a.75.75,0,0,1,0,1.5Z" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodDrinksTeaCup',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
