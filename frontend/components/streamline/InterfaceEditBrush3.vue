<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <rect x="0.5" width="13" height="5" rx="1.75" />
            <path
                d="M8.5,9.5H8.42a.23.23,0,0,1-.22-.18A2.74,2.74,0,0,0,5.5,7H2.75A.76.76,0,0,1,2,6.25a.75.75,0,0,0-1.5,0A2.25,2.25,0,0,0,2.75,8.5H5.5a1.21,1.21,0,0,1,1.14.8.15.15,0,0,1,0,.14.13.13,0,0,1-.12.06,1,1,0,0,0-1,1V13a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V10.5A1,1,0,0,0,8.5,9.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditBrush3',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
