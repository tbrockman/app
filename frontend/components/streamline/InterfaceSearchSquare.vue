<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="6.25" cy="6.25" r="1.75" />
            <path
                d="M14,1.5A1.5,1.5,0,0,0,12.5,0H1.5A1.5,1.5,0,0,0,0,1.5v11A1.5,1.5,0,0,0,1.5,14h11A1.5,1.5,0,0,0,14,12.5Zm-3.47,9a.75.75,0,0,1-1.06,0L8.09,9.15a.24.24,0,0,0-.29,0A3.24,3.24,0,1,1,9.11,7.8a.24.24,0,0,0,0,.29l1.38,1.38A.75.75,0,0,1,10.53,10.53Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceSearchSquare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
