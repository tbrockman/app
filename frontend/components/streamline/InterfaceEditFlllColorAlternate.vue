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
                d="M4.92,13a2.08,2.08,0,0,1-1.47-.61L.61,9.55a2.1,2.1,0,0,1-.2-2.72L5.17.48A1.24,1.24,0,0,1,6.06,0,1.17,1.17,0,0,1,7,.36L12.65,6h0a1.26,1.26,0,0,1,.35.94,1.22,1.22,0,0,1-.48.88L6.17,12.59A2.06,2.06,0,0,1,4.92,13ZM6.17,1.65,1.61,7.73a.59.59,0,0,0,.06.76l2.84,2.84a.51.51,0,0,0,.76.06l6.08-4.56Z"
            />
            <path
                d="M11,12.5a9.19,9.19,0,0,1,1.06-2.67.49.49,0,0,1,.88,0A9.19,9.19,0,0,1,14,12.5a1.5,1.5,0,0,1-3,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditFlllColorAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
