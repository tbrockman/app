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
                d="M10,6a.74.74,0,0,1-.62-.33L7.3,2.55a.27.27,0,0,0-.22-.11.23.23,0,0,0-.21.13l-1,1.79a.75.75,0,1,1-1.32-.72L6.34.39A.75.75,0,0,1,7.62.33l1.87,2.8a.25.25,0,0,0,.24.11.24.24,0,0,0,.2-.17L10,2.76a.75.75,0,0,1,1.42.48l-.75,2.25a.73.73,0,0,1-.61.5Z"
            />
            <path
                d="M10,14a.74.74,0,0,1-.53-.22L7.72,12a.75.75,0,0,1,.53-1.28h3.38a.22.22,0,0,0,.21-.12.26.26,0,0,0,0-.24l-1-2.05a.75.75,0,0,1,1.34-.68l1.75,3.5a.76.76,0,0,1,0,.73.74.74,0,0,1-.64.36H10.66a.25.25,0,0,0-.23.15.26.26,0,0,0,.06.28l0,0a.75.75,0,0,1,0,1.06A.74.74,0,0,1,10,14Z"
            />
            <path
                d="M5.75,11.5a.76.76,0,0,1-.75.75H1.25a.74.74,0,0,1-.64-.36.76.76,0,0,1,0-.73L2.11,8.11a.26.26,0,0,0,0-.27.25.25,0,0,0-.26-.09L.93,8A.75.75,0,0,1,.57,6.52l3-.75A.73.73,0,0,1,4.33,6a.75.75,0,0,1,.09.81L2.64,10.39a.26.26,0,0,0,0,.24.22.22,0,0,0,.21.12H5A.76.76,0,0,1,5.75,11.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'NatrueEcologyRecycle2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
