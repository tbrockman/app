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
                d="M12.5.38H1.5A1.5,1.5,0,0,0,0,1.88v5a1.5,1.5,0,0,0,1.5,1.5h11A1.5,1.5,0,0,0,14,6.88v-5A1.5,1.5,0,0,0,12.5.38ZM7,6.38a2,2,0,1,1,2-2A2,2,0,0,1,7,6.38Z"
            />
            <path
                d="M12.25,11.38H1.75A.76.76,0,0,1,1,10.62a.75.75,0,0,1,.75-.74h10.5a.75.75,0,0,1,.75.74A.76.76,0,0,1,12.25,11.38Z"
            />
            <path
                d="M11.25,14.38H2.75A.76.76,0,0,1,2,13.62a.75.75,0,0,1,.75-.74h8.5a.75.75,0,0,1,.75.74A.76.76,0,0,1,11.25,14.38Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MoneyCashBill1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
