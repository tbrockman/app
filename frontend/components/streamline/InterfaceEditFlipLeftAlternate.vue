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
                d="M4.5,13a1,1,0,0,1,1-1h6.25a.25.25,0,0,0,.25-.25V2.25A.25.25,0,0,0,11.75,2H5.5a1,1,0,0,1,0-2H12a2,2,0,0,1,2,2V12a2,2,0,0,1-2,2H5.5A1,1,0,0,1,4.5,13Z"
            />
            <circle cx="1.25" cy="1.25" r="1.25" />
            <circle cx="1.25" cy="7" r="1.25" />
            <circle cx="1.25" cy="12.75" r="1.25" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditFlipLeftAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
