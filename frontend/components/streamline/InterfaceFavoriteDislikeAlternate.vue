<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,7.09A1.66,1.66,0,0,1,12.35,9H8.71a.25.25,0,0,0-.25.25v2.15A1.62,1.62,0,0,1,6.85,13a1.59,1.59,0,0,1-1.36-.75L3.17,8.62A.25.25,0,0,0,3,8.5H.5A.5.5,0,0,1,0,8V1.5A.5.5,0,0,1,.5,1H11.56a1.65,1.65,0,0,1,1.63,1.39Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFavoriteDislikeAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
