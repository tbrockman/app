<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1.5A1.5,1.5,0,0,0,12.5,0H1.5A1.5,1.5,0,0,0,0,1.5v11A1.5,1.5,0,0,0,1.5,14h11A1.5,1.5,0,0,0,14,12.5ZM11.25,9a.76.76,0,0,1-.75.75h-5A.75.75,0,0,1,5,9.53l-2-2A.75.75,0,0,1,3,6.47l2-2a.75.75,0,0,1,.53-.22h5a.76.76,0,0,1,.75.75Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerKeyboardDelete',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
