<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="7" cy="6" r="2" />
            <path
                d="M14,2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V12a2,2,0,0,0,2,2H12a2,2,0,0,0,2-2Zm-2,9.75a.25.25,0,0,1-.25.25h-.57a.26.26,0,0,1-.22-.13,4.49,4.49,0,0,0-7.92,0,.26.26,0,0,1-.22.13H2.25A.25.25,0,0,1,2,11.75V2.25A.25.25,0,0,1,2.25,2h9.5a.25.25,0,0,1,.25.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUserSquareAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
