<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1.5A1.5,1.5,0,0,0,12.5,0H1.5A1.5,1.5,0,0,0,0,1.5v11A1.5,1.5,0,0,0,1.5,14h11A1.5,1.5,0,0,0,14,12.5Zm-6.49,3a.75.75,0,0,1,0,1.06l-3,3.25A.75.75,0,0,1,4,9a.78.78,0,0,1-.48-.17L2,7.58A.75.75,0,1,1,3,6.42l.77.65a.25.25,0,0,0,.34,0L6.45,4.49A.75.75,0,0,1,7.51,4.45ZM11.5,9h-3a.75.75,0,0,1,0-1.5h3a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceValidationCheckSquare2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
