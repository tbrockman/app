<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12,0H2A2,2,0,0,0,0,2V12a2,2,0,0,0,2,2H12a2,2,0,0,0,2-2V2A2,2,0,0,0,12,0ZM10.49,6.49,10,9.86a.75.75,0,0,1-.74.64H5a1.27,1.27,0,0,1-.58-.14L4,10.15a.2.2,0,0,0-.11,0H3.75a.25.25,0,0,1-.25-.24V6.25A.25.25,0,0,1,3.75,6h0A.25.25,0,0,0,4,5.88L5.58,3.34a.72.72,0,0,1,1.33.38V5.38a.25.25,0,0,0,.25.24h2.6A.75.75,0,0,1,10.49,6.49Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFavoriteLikeSquare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
