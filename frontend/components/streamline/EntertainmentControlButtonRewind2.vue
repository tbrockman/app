<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.56,2.35,8.91,4.56a.25.25,0,0,1-.41-.2V3.48A1.49,1.49,0,0,0,6.06,2.35L2.91,5a.24.24,0,0,1-.27,0,.26.26,0,0,1-.14-.23v-2A.76.76,0,0,0,1.75,2h-1A.76.76,0,0,0,0,2.75v8.5A.76.76,0,0,0,.75,12h1a.76.76,0,0,0,.75-.75v-2A.26.26,0,0,1,2.64,9a.24.24,0,0,1,.27,0l3.15,2.62A1.49,1.49,0,0,0,8.5,10.52V9.64a.25.25,0,0,1,.41-.2l2.65,2.21A1.49,1.49,0,0,0,14,10.52v-7A1.49,1.49,0,0,0,11.56,2.35Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentControlButtonRewind2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
