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
                d="M10.84,8.5a.25.25,0,0,0,.25-.22L12,.56a.5.5,0,0,0-.13-.39A.48.48,0,0,0,11.5,0h-9a.48.48,0,0,0-.37.17A.5.5,0,0,0,2,.56l.91,7.72a.25.25,0,0,0,.25.22Z"
            />
            <path
                d="M13.25,12.5H10.87a.23.23,0,0,1-.18-.08.31.31,0,0,1-.07-.2l.23-1.94a.25.25,0,0,0-.06-.2A.26.26,0,0,0,10.6,10H3.4a.26.26,0,0,0-.19.08.25.25,0,0,0-.06.2l.23,1.94a.31.31,0,0,1-.07.2.23.23,0,0,1-.18.08H.75a.75.75,0,0,0,0,1.5h12.5a.75.75,0,0,0,0-1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ShoppingClothAccessoriesTallHat',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
