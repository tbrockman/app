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
                d="M14,13.25a.76.76,0,0,0-.75-.75H.75a.75.75,0,0,0,0,1.5h12.5A.76.76,0,0,0,14,13.25Z"
            />
            <path
                d="M8,1.82a.25.25,0,0,1-.22-.25V.75a.75.75,0,0,0-1.5,0v.82A.26.26,0,0,1,6,1.82,7,7,0,0,0,0,8.75v1.5A.76.76,0,0,0,.75,11h12.5a.76.76,0,0,0,.75-.75V8.75A7,7,0,0,0,8,1.82ZM12.5,9.25a.25.25,0,0,1-.25.25H1.75a.25.25,0,0,1-.25-.25v-.5a5.5,5.5,0,0,1,11,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodKitchenwareServingDomeAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
