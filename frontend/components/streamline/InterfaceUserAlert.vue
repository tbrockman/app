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
                d="M4.5,12a2.5,2.5,0,0,1,.91-1.93.23.23,0,0,0,.09-.19V9.5a4.44,4.44,0,0,1,.29-1.59.22.22,0,0,0,0-.21.21.21,0,0,0-.17-.12A4.73,4.73,0,0,0,0,12.25V13a1,1,0,0,0,1,1H4.88a.26.26,0,0,0,.23-.14.27.27,0,0,0,0-.27A2.53,2.53,0,0,1,4.5,12Z"
            />
            <path
                d="M13.2,11a.25.25,0,0,1-.2-.24V9.5a3,3,0,0,0-6,0v1.28a.25.25,0,0,1-.2.24A1,1,0,0,0,7,13H8.78a.25.25,0,0,1,.24.2,1,1,0,0,0,2,0,.25.25,0,0,1,.24-.2H13a1,1,0,0,0,.2-2Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUserAlert',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
