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
                d="M5.5,4H4.75a.25.25,0,0,1-.25-.25V3a1,1,0,0,0-2,0v.75A.25.25,0,0,1,2.25,4H1.5A1.5,1.5,0,0,0,0,5.5v7A1.5,1.5,0,0,0,1.5,14h4A1.5,1.5,0,0,0,7,12.5v-7A1.5,1.5,0,0,0,5.5,4Z"
            />
            <path
                d="M8.51,1.64a.76.76,0,0,1,.6-.88l4-.75a.76.76,0,0,1,.88.6.76.76,0,0,1-.6.88l-4,.75A.76.76,0,0,1,8.51,1.64Z"
            />
            <path
                d="M13.11,5.49l-4-.75a.75.75,0,1,1,.28-1.48l4,.75a.75.75,0,0,1-.28,1.48Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditSpray',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
