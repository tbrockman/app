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
                d="M11.28,12.67a2,2,0,0,0-2-1.67H4.69a2,2,0,0,0-2,1.67l-.12.75a.46.46,0,0,0,.11.4.46.46,0,0,0,.38.18h7.82a.46.46,0,0,0,.38-.18.46.46,0,0,0,.11-.4Z"
            />
            <path
                d="M5.17,5.37a.27.27,0,0,1,.09.25L4.51,8.89A.51.51,0,0,0,5,9.5H9a.51.51,0,0,0,.49-.61L8.74,5.62a.27.27,0,0,1,.09-.25,3,3,0,1,0-3.66,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentLeisureChessPiecePawn',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
