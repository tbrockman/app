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
                d="M12.12,12l-.78-6A1.74,1.74,0,0,0,9.6,4.5H4.4A1.74,1.74,0,0,0,2.66,6l-.78,6a1.74,1.74,0,0,0,.43,1.36A1.76,1.76,0,0,0,3.62,14h6.76a1.74,1.74,0,0,0,1.74-2ZM4.4,6H9.6a.25.25,0,0,1,.25.22v0l.33,2.48a.3.3,0,0,1-.06.2A.27.27,0,0,1,9.93,9H4.07a.27.27,0,0,1-.19-.08.3.3,0,0,1-.06-.2l.33-2.5A.25.25,0,0,1,4.4,6Z"
            />
            <path
                d="M4.55,3h4.9a.53.53,0,0,0,.39-.18.53.53,0,0,0,.1-.42,3,3,0,0,0-5.88,0,.53.53,0,0,0,.1.42A.53.53,0,0,0,4.55,3Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'FoodKitchenwareSalt',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
