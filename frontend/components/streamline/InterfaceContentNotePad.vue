<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.5,2.55h-.75a.25.25,0,0,1-.25-.25V.75a.75.75,0,0,0-1.5,0V2.3a.25.25,0,0,1-.25.25H8a.25.25,0,0,1-.25-.25V.75a.75.75,0,0,0-1.5,0V2.3A.25.25,0,0,1,6,2.55H4.25A.25.25,0,0,1,4,2.3V.75a.75.75,0,0,0-1.5,0V2.3a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,4.05V12.5A1.5,1.5,0,0,0,1.5,14h11A1.5,1.5,0,0,0,14,12.5V4.05A1.5,1.5,0,0,0,12.5,2.55Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceContentNotePad',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
