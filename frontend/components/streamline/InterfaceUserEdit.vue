<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="4.75" cy="2.75" r="2.75" />
            <path
                d="M5.52,13.71a1.19,1.19,0,0,1,0-.42l.4-2.86a1.51,1.51,0,0,1,.43-.84l1-1a.22.22,0,0,0,.07-.2.23.23,0,0,0-.11-.19,4.5,4.5,0,0,0-2-.72A4.75,4.75,0,0,0,0,12.25V13a1,1,0,0,0,1,1H5.27a.25.25,0,0,0,.19-.09A.27.27,0,0,0,5.52,13.71Z"
            />
            <path
                d="M11.89,6.5a.78.78,0,0,0-.57.24L7.64,10.41a1,1,0,0,0-.28.57l-.31,2.19a.25.25,0,0,0,.28.28l2.19-.31a1,1,0,0,0,.57-.28l3.67-3.68a.81.81,0,0,0,0-1.15L12.47,6.74A.82.82,0,0,0,11.89,6.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUserEdit',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
