<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.67,0H2.33A2.34,2.34,0,0,0,0,2.33v9.34A2.34,2.34,0,0,0,2.33,14h9.34A2.34,2.34,0,0,0,14,11.67V2.33A2.34,2.34,0,0,0,11.67,0ZM6.08,12a.29.29,0,0,1-.18-.07L2.07,8.1A.29.29,0,0,1,2,7.92V6.08a.29.29,0,0,1,.07-.18L5.9,2.07A.29.29,0,0,1,6.08,2H7.92a.29.29,0,0,1,.18.07L11.93,5.9a.29.29,0,0,1,.07.18V7.92a.29.29,0,0,1-.07.18L8.1,11.93a.29.29,0,0,1-.18.07Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceDashboardLayout1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
