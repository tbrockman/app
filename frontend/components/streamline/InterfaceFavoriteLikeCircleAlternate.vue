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
                d="M9.37,5.77H7.17a.25.25,0,0,1-.25-.25V4.13a.61.61,0,0,0-1.13-.34L4.45,6a.25.25,0,0,1-.21.11A.24.24,0,0,0,4,6.34V9.43a.26.26,0,0,0,.25.25h.07a.2.2,0,0,1,.11,0l.35.18a1.06,1.06,0,0,0,.5.12H8.93a.63.63,0,0,0,.62-.55L10,6.52A.65.65,0,0,0,9.37,5.77Z"
            />
            <path
                d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM7,12.5A5.5,5.5,0,1,1,12.5,7,5.51,5.51,0,0,1,7,12.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFavoriteLikeCircleAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
