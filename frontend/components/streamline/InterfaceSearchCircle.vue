<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="6.25" cy="6.25" r="1.5" />
            <path
                d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0Zm3.28,10.28a.75.75,0,0,1-1.06,0L7.91,9a.26.26,0,0,0-.3-.05,2.94,2.94,0,0,1-1.36.33,3,3,0,1,1,3-3,2.94,2.94,0,0,1-.33,1.36.26.26,0,0,0,.05.3l1.31,1.31A.75.75,0,0,1,10.28,10.28Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceSearchCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
