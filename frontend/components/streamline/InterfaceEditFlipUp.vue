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
                d="M13,4.5a1,1,0,0,0-1,1V7.75a.25.25,0,0,1-.25.25H2.25A.25.25,0,0,1,2,7.75V5.5a1,1,0,0,0-2,0V12a2,2,0,0,0,2,2H12a2,2,0,0,0,2-2V5.5A1,1,0,0,0,13,4.5Z"
            />
            <circle cx="1.25" cy="1.25" r="1.25" />
            <circle cx="7" cy="1.25" r="1.25" />
            <circle cx="12.75" cy="1.25" r="1.25" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditFlipUp',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
