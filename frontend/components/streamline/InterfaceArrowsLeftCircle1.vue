<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,14A7,7,0,1,0,0,7,7,7,0,0,0,7,14ZM5.22,9.28,3.47,7.53a.75.75,0,0,1,0-1.06L5.22,4.72A.75.75,0,0,1,6,4.56a.74.74,0,0,1,.46.69V6a.25.25,0,0,0,.25.25H10a.75.75,0,0,1,0,1.5H6.75A.25.25,0,0,0,6.5,8v.75A.74.74,0,0,1,6,9.44.75.75,0,0,1,5.22,9.28Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsLeftCircle1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
