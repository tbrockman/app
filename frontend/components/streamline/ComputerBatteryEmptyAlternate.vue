<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M10.75,11.5h-9A1.76,1.76,0,0,1,0,9.75V4.25A1.76,1.76,0,0,1,1.75,2.5h9A1.76,1.76,0,0,1,12.5,4.25v.06a.26.26,0,0,0,.19.25A1.75,1.75,0,0,1,14,6.25v1.5a1.75,1.75,0,0,1-1.31,1.69.26.26,0,0,0-.19.25v.06A1.76,1.76,0,0,1,10.75,11.5ZM1.75,4a.25.25,0,0,0-.25.25v5.5a.25.25,0,0,0,.25.25h9A.25.25,0,0,0,11,9.75v-1A.76.76,0,0,1,11.75,8h.5a.25.25,0,0,0,.25-.25V6.25A.25.25,0,0,0,12.25,6h-.5A.76.76,0,0,1,11,5.25v-1A.25.25,0,0,0,10.75,4Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerBatteryEmptyAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
