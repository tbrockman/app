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
                d="M10.49,6.43a.52.52,0,0,0,.14-.56.53.53,0,0,0-.44-.37L8.45,5.23a.26.26,0,0,1-.19-.13L7.49,3.53a.57.57,0,0,0-1,0L5.72,5.11a.3.3,0,0,1-.19.14L3.81,5.5a.53.53,0,0,0-.44.37.52.52,0,0,0,.14.56L4.76,7.67a.26.26,0,0,1,.07.22L4.54,9.61a.52.52,0,0,0,.21.53.55.55,0,0,0,.58,0L6.9,9.37a.27.27,0,0,1,.23,0l1.54.81a.55.55,0,0,0,.58,0,.52.52,0,0,0,.21-.53L9.18,7.87a.23.23,0,0,1,.07-.22Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFavoriteStarCircleAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
