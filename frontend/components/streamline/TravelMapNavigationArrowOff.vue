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
                d="M11.86,5.18a.28.28,0,0,0,.23.07.26.26,0,0,0,.18-.16L14,.68a.5.5,0,0,0-.12-.53A.5.5,0,0,0,13.32,0L8.91,1.73a.26.26,0,0,0-.16.18.28.28,0,0,0,.07.23Z"
            />
            <path
                d="M4.78.22A.75.75,0,0,0,3.72,1.28L5.21,2.77A.25.25,0,0,1,5.28,3a.23.23,0,0,1-.15.18L.32,5A.51.51,0,0,0,0,5.51.48.48,0,0,0,.34,6L6,7.86A.23.23,0,0,1,6.14,8L8,13.66a.48.48,0,0,0,.46.34h0A.51.51,0,0,0,9,13.68l1.85-4.81A.23.23,0,0,1,11,8.72a.25.25,0,0,1,.23.07l1.49,1.49a.75.75,0,0,0,1.06-1.06Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelMapNavigationArrowOff',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
