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
                d="M2.25,7.75H.75a.75.75,0,0,1,0-1.5h1.5a.75.75,0,0,1,0,1.5Z"
            />
            <path
                d="M3.18,4.24,2.12,3.18A.75.75,0,0,1,3.18,2.12L4.24,3.18A.75.75,0,0,1,3.18,4.24Z"
            />
            <path
                d="M2.12,11.88a.75.75,0,0,1,0-1.06L3.18,9.76a.75.75,0,1,1,1.06,1.06L3.18,11.88A.75.75,0,0,1,2.12,11.88Z"
            />
            <path
                d="M7,14a.76.76,0,0,1-.75-.75V.75A.76.76,0,0,1,7,0,7,7,0,0,1,7,14ZM8.05,1.6a.3.3,0,0,0-.21,0,.25.25,0,0,0-.09.2v10.3a.25.25,0,0,0,.09.2.26.26,0,0,0,.21.05,5.5,5.5,0,0,0,0-10.8Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTimeSixAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
