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
                d="M8.5,13.25A.25.25,0,0,0,8.25,13a2.25,2.25,0,0,1-1-4.28.26.26,0,0,0,.14-.21.24.24,0,0,0-.11-.23,4.58,4.58,0,0,0-2.1-.76A4.75,4.75,0,0,0,0,12.25V13a1,1,0,0,0,1,1H8.3a.22.22,0,0,0,.19-.09.27.27,0,0,0,.06-.21A2.3,2.3,0,0,1,8.5,13.25Z"
            />
            <path d="M8.25,11.5a.75.75,0,0,1,0-1.5h5a.75.75,0,0,1,0,1.5Z" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUserRemove',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
