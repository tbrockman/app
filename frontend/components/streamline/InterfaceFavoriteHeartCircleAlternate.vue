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
                d="M10.45,5.71A2,2,0,0,0,9,4.29,2.09,2.09,0,0,0,7.07,5a.1.1,0,0,1-.13,0A2.11,2.11,0,0,0,5,4.29,2,2,0,0,0,3.55,5.71a1.93,1.93,0,0,0,.5,1.93l2.78,2.54a.24.24,0,0,0,.34,0L10,7.63A1.92,1.92,0,0,0,10.45,5.71Z"
            />
            <path
                d="M7,14a7,7,0,1,1,7-7A7,7,0,0,1,7,14ZM7,1.5A5.5,5.5,0,1,0,12.5,7,5.51,5.51,0,0,0,7,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFavoriteHeartCircleAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
