<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.18,2.23A1.88,1.88,0,0,0,11.31.62H5.39A2.53,2.53,0,0,0,4,1l-1.12.88H1a1,1,0,0,0-1,1V7.62a1,1,0,0,0,1,1H2.93l2.34,3.87a1.84,1.84,0,0,0,1.58.89,1.91,1.91,0,0,0,1.9-1.86V9.62A.25.25,0,0,1,9,9.38h3.1A1.91,1.91,0,0,0,14,7.19ZM12.4,7.74a.38.38,0,0,1-.3.14H8a.75.75,0,0,0-.75.74v2.9c0,.29-.53.47-.7.19L4.29,8a.22.22,0,0,1,0-.13v-5a.26.26,0,0,1,.1-.2l.55-.43a1.17,1.17,0,0,1,.49-.11h5.92a.4.4,0,0,1,.39.34l.8,5A.4.4,0,0,1,12.4,7.74Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFavoriteDislike1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
