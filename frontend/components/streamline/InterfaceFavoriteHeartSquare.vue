<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V12a2,2,0,0,0,2,2H12a2,2,0,0,0,2-2ZM10.45,7.44l-3.25,3a.29.29,0,0,1-.4,0l-3.25-3A2.24,2.24,0,0,1,3,5.2,2.34,2.34,0,0,1,4.65,3.55a2.44,2.44,0,0,1,2.22.73.21.21,0,0,0,.26,0,2.44,2.44,0,0,1,2.22-.73A2.34,2.34,0,0,1,11,5.2,2.21,2.21,0,0,1,10.45,7.44Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFavoriteHeartSquare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
