<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.25,4.5h-.5a.25.25,0,0,1-.25-.25A1.76,1.76,0,0,0,10.75,2.5h-9A1.76,1.76,0,0,0,0,4.25v5.5A1.76,1.76,0,0,0,1.75,11.5h9A1.76,1.76,0,0,0,12.5,9.75a.25.25,0,0,1,.25-.25h.5A.76.76,0,0,0,14,8.75V5.25A.76.76,0,0,0,13.25,4.5ZM3.5,9a.5.5,0,0,1-.5.5H2.5A.5.5,0,0,1,2,9V5a.5.5,0,0,1,.5-.5H3a.5.5,0,0,1,.5.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerBatteryLow',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
