<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M.79,10.71l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,0-1.42A1,1,0,0,0,7.5,9H5.75a.25.25,0,0,1-.25-.25V5.12A3.08,3.08,0,0,1,7.9,2.06,3,3,0,0,1,11.5,5V9a1,1,0,0,0,2,0V5.22A5.16,5.16,0,0,0,9,0,5,5,0,0,0,3.5,5V8.75A.25.25,0,0,1,3.25,9H1.5a1,1,0,0,0-.71.29A1,1,0,0,0,.79,10.71Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsTurnDownAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
