<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="7" cy="2.25" r="2.25" />
            <path
                d="M7,6c-3.4,0-3.5,6.73-3.5,7.5A.5.5,0,0,0,4,14h6a.5.5,0,0,0,.5-.5C10.5,12.73,10.4,6,7,6Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'TravelWayfinderToiltetSignWoman',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
