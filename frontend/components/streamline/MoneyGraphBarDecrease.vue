<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <rect y="5.5" width="3.5" height="8.5" rx="1.25" />
            <rect x="10" y="9.5" width="3.5" height="4.5" rx="1.25" />
            <rect x="5" y="7.5" width="3.5" height="6.5" rx="1.25" />
            <path
                d="M13.92,6.41,12.83,4.17a.75.75,0,0,0-.67-.42.81.81,0,0,0-.68.4l-.34.67L1.87.08a.75.75,0,0,0-.68,1.34l9.27,4.74-.34.67a.73.73,0,0,0,.06.78.75.75,0,0,0,.61.31h.12l2.47-.43a.76.76,0,0,0,.54-.4A.72.72,0,0,0,13.92,6.41Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MoneyGraphBarDecrease',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
