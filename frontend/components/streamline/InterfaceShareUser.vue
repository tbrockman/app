<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="7" cy="7" r="2.5" />
            <path
                d="M9.8,14a.71.71,0,0,0,.63-.41.82.82,0,0,0-.07-.79A4.11,4.11,0,0,0,7,11a4.11,4.11,0,0,0-3.36,1.8.82.82,0,0,0-.07.79A.71.71,0,0,0,4.2,14Z"
            />
            <path
                d="M12,10.39a1,1,0,0,1-.49-1.32,5,5,0,1,0-9.1,0,1,1,0,1,1-1.82.82A6.9,6.9,0,0,1,0,7,7,7,0,0,1,14,7a6.9,6.9,0,0,1-.63,2.89A1,1,0,0,1,12,10.39Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceShareUser',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
