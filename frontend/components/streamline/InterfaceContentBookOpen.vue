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
                d="M13.48,1.06a1.53,1.53,0,0,0-1.2-.35A9.23,9.23,0,0,0,8.46,2.22,1,1,0,0,0,8,3.06V12.8a.5.5,0,0,0,.79.41,8.29,8.29,0,0,1,3.9-1.54A1.49,1.49,0,0,0,14,10.18v-8A1.51,1.51,0,0,0,13.48,1.06Z"
            />
            <path
                d="M6,3.06a1,1,0,0,0-.46-.84A9.23,9.23,0,0,0,1.72.71,1.5,1.5,0,0,0,0,2.2v8a1.49,1.49,0,0,0,1.31,1.49,8.29,8.29,0,0,1,3.9,1.54A.5.5,0,0,0,6,12.8Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceContentBookOpen',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
