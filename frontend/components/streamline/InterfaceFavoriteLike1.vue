<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,6.81A1.91,1.91,0,0,0,12.1,4.62H9a.25.25,0,0,1-.25-.24V2.48A1.91,1.91,0,0,0,6.85.62a1.84,1.84,0,0,0-1.58.89L2.93,5.38H1a1,1,0,0,0-1,1v4.74a1,1,0,0,0,1,1H2.92L4,13a2.53,2.53,0,0,0,1.35.38h5.92a1.88,1.88,0,0,0,1.87-1.61ZM12.5,6.58l-.8,5a.4.4,0,0,1-.39.34H5.39a1.17,1.17,0,0,1-.49-.11l-.55-.43a.26.26,0,0,1-.1-.2v-5a.22.22,0,0,1,0-.13L6.55,2.29c.17-.28.7-.1.7.19v2.9A.75.75,0,0,0,8,6.12h4.1a.38.38,0,0,1,.3.14A.4.4,0,0,1,12.5,6.58Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFavoriteLike1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
