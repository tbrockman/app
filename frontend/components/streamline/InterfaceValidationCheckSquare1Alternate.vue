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
                d="M10.72,3.91A.76.76,0,0,1,10.84,5l-3.93,5a1.3,1.3,0,0,1-.82.55l-.23,0a1.24,1.24,0,0,1-.78-.28L3.29,8.84a.75.75,0,0,1,.92-1.18L5.62,8.74A.24.24,0,0,0,6,8.7L9.66,4A.76.76,0,0,1,10.72,3.91Z"
            />
            <path
                d="M11.25,14H2.75A2.75,2.75,0,0,1,0,11.25V2.75A2.75,2.75,0,0,1,2.75,0h8.5A2.75,2.75,0,0,1,14,2.75v8.5A2.75,2.75,0,0,1,11.25,14ZM2.75,1.5A1.25,1.25,0,0,0,1.5,2.75v8.5A1.25,1.25,0,0,0,2.75,12.5h8.5a1.25,1.25,0,0,0,1.25-1.25V2.75A1.25,1.25,0,0,0,11.25,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceValidationCheckSquare1Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
