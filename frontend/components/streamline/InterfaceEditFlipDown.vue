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
                d="M13,9.5a1,1,0,0,1-1-1V6.25A.25.25,0,0,0,11.75,6H2.25A.25.25,0,0,0,2,6.25V8.5a1,1,0,0,1-2,0V2A2,2,0,0,1,2,0H12a2,2,0,0,1,2,2V8.5A1,1,0,0,1,13,9.5Z"
            />
            <circle cx="1.25" cy="12.75" r="1.25" />
            <circle cx="7" cy="12.75" r="1.25" />
            <circle cx="12.75" cy="12.75" r="1.25" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditFlipDown',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
