<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.21,3.29l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,0,1.42A1,1,0,0,0,6.5,5H8.25a.25.25,0,0,1,.25.25V8.88a3.08,3.08,0,0,1-2.4,3.06A3,3,0,0,1,2.5,9V5a1,1,0,0,0-2,0V8.78A5.16,5.16,0,0,0,5,14a5,5,0,0,0,5.5-5V5.25A.25.25,0,0,1,10.75,5H12.5a1,1,0,0,0,.71-.29A1,1,0,0,0,13.21,3.29Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsTurnUpAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
