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
                d="M14,1.25A1.25,1.25,0,0,0,12.75,0H1.25A1.25,1.25,0,0,0,0,1.25v2.5A1.25,1.25,0,0,0,1.25,5H2.5v7.75A1.25,1.25,0,0,0,3.75,14h6.5a1.25,1.25,0,0,0,1.25-1.25V5h1.25A1.25,1.25,0,0,0,14,3.75Zm-4,11a.25.25,0,0,1-.25.25H4.25A.25.25,0,0,1,4,12.25V2.75a.25.25,0,0,1,.25-.25h5.5a.25.25,0,0,1,.25.25Z"
            />
            <circle cx="7" cy="7.5" r="1.5" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MoneyAtmCard2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
