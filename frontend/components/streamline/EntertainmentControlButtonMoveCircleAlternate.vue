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
                d="M7,14a7,7,0,1,1,7-7A7,7,0,0,1,7,14ZM7,1.5A5.5,5.5,0,1,0,12.5,7,5.51,5.51,0,0,0,7,1.5Z"
            />
            <path
                d="M5,8a.5.5,0,0,1-.78.42l-1.5-1a.51.51,0,0,1,0-.84l1.5-1A.5.5,0,0,1,5,6Z"
            />
            <path
                d="M8.42,9.78l-1,1.5a.51.51,0,0,1-.84,0l-1-1.5A.5.5,0,0,1,6,9H8a.5.5,0,0,1,.42.78Z"
            />
            <path
                d="M8.44,4.74A.51.51,0,0,1,8,5H6a.5.5,0,0,1-.42-.78l1-1.5a.52.52,0,0,1,.84,0l1,1.5A.51.51,0,0,1,8.44,4.74Z"
            />
            <path
                d="M11.28,7.42l-1.5,1A.5.5,0,0,1,9,8V6a.5.5,0,0,1,.78-.42l1.5,1a.51.51,0,0,1,0,.84Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentControlButtonMoveCircleAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
