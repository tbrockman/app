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
                d="M14,11.25A2.75,2.75,0,0,1,11.25,14H2.75A2.75,2.75,0,0,1,0,11.25V2.75A2.75,2.75,0,0,1,2.75,0h8.5A2.75,2.75,0,0,1,14,2.75ZM2.75,1.5A1.25,1.25,0,0,0,1.5,2.75v8.5A1.25,1.25,0,0,0,2.75,12.5h8.5a1.25,1.25,0,0,0,1.25-1.25V2.75A1.25,1.25,0,0,0,11.25,1.5Z"
            />
            <path
                d="M10.25,10H7.75a.75.75,0,0,1-.65-.38l-2-3.49A.23.23,0,0,0,4.92,6H3.75a.75.75,0,0,1,0-1.5H5.5a.75.75,0,0,1,.65.38l2,3.49a.23.23,0,0,0,.21.13h1.92a.75.75,0,0,1,0,1.5Z"
            />
            <path
                d="M10.25,6H8.75a.75.75,0,0,1,0-1.5h1.5a.75.75,0,0,1,0,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ComputerKeyboardOptionAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
