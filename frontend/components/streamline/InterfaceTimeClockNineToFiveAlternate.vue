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
                d="M7.75,11.75v1.5a.75.75,0,0,1-1.5,0v-1.5a.75.75,0,0,1,1.5,0Z"
            />
            <path
                d="M4.24,10.82,3.18,11.88a.75.75,0,1,1-1.06-1.06L3.18,9.76a.75.75,0,1,1,1.06,1.06Z"
            />
            <path
                d="M11.19,12.39a.79.79,0,0,1-.53-.22L6.77,8.32a.29.29,0,0,0-.18-.07H.75A.76.76,0,0,1,0,7.5V7a7,7,0,1,1,11.69,5.19A.74.74,0,0,1,11.19,12.39ZM1.52,6.48a.26.26,0,0,0,.07.19.25.25,0,0,0,.18.08H7A.75.75,0,0,1,7.53,7L11,10.38a.23.23,0,0,0,.19.07.24.24,0,0,0,.18-.09A5.45,5.45,0,0,0,12.5,7a5.5,5.5,0,0,0-11-.52Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTimeClockNineToFiveAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
