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
                d="M12.25,12H3.75a.75.75,0,0,1,0-1.5h8.5a.25.25,0,0,0,.25-.25V5.75a.75.75,0,0,1,1.5,0v4.5A1.76,1.76,0,0,1,12.25,12Z"
            />
            <path
                d="M9.5,2h-8A1.5,1.5,0,0,0,0,3.5v4A1.5,1.5,0,0,0,1.5,9h8A1.5,1.5,0,0,0,11,7.5v-4A1.5,1.5,0,0,0,9.5,2Zm-4,5A1.5,1.5,0,1,1,7,5.5,1.5,1.5,0,0,1,5.5,7Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MoneyCashBill3',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
