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
                d="M10.22,9.78,8,7.53A.75.75,0,0,1,8,6.47l2.25-2.25a.75.75,0,0,1,1.06,1.06L9.74,6.82a.25.25,0,0,0,0,.36l1.54,1.54a.75.75,0,0,1-1.06,1.06Z"
            />
            <path
                d="M2.72,9.78a.75.75,0,0,1,0-1.06L4.26,7.18a.25.25,0,0,0,0-.36L2.72,5.28A.75.75,0,1,1,3.78,4.22L6,6.47A.75.75,0,0,1,6,7.53L3.78,9.78A.75.75,0,0,1,2.72,9.78Z"
            />
            <path
                d="M.75,14A.76.76,0,0,1,0,13.25V.75A.76.76,0,0,1,.75,0,.76.76,0,0,1,1.5.75v12.5A.76.76,0,0,1,.75,14Z"
            />
            <path
                d="M13.25,14a.76.76,0,0,1-.75-.75V.75a.75.75,0,0,1,1.5,0v12.5A.76.76,0,0,1,13.25,14Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsHorizontalShrink',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
