<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.25,13a1,1,0,0,0-1-1H7.5a.25.25,0,0,1-.25-.25V4a.25.25,0,0,1,.15-.23.26.26,0,0,1,.28,0L10,6.21a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7,.29a1,1,0,0,0-1.42,0L1,4.79A1,1,0,0,0,2.46,6.21L4.82,3.84a.26.26,0,0,1,.28,0A.25.25,0,0,1,5.25,4v8a2,2,0,0,0,2,2h5A1,1,0,0,0,13.25,13Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsBendUpLeft1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
