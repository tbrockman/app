<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.86,8.05l-.76-6.5A1.75,1.75,0,0,0,10.36,0H3.64A1.75,1.75,0,0,0,1.9,1.55L1.14,8a1.71,1.71,0,0,0,.43,1.37A1.73,1.73,0,0,0,2.88,10H6a.25.25,0,0,1,.25.25v2A.25.25,0,0,1,6,12.5H4.25a.75.75,0,0,0,0,1.5h5.5a.75.75,0,0,0,0-1.5H8a.25.25,0,0,1-.25-.25v-2A.25.25,0,0,1,8,10h3.12a1.73,1.73,0,0,0,1.31-.59A1.7,1.7,0,0,0,12.86,8.05Zm-1.55.37a.24.24,0,0,1-.19.08H2.88a.24.24,0,0,1-.19-.08.25.25,0,0,1-.06-.2l.76-6.5a.25.25,0,0,1,.25-.22h6.72a.25.25,0,0,1,.25.22l.76,6.5h0A.25.25,0,0,1,11.31,8.42Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceLightingLightBulbTableAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
