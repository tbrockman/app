<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.69,9.94A1.75,1.75,0,0,0,13,8.25V1.75A1.76,1.76,0,0,0,11.25,0h-8A2.25,2.25,0,0,0,1,2.25v9A2.75,2.75,0,0,0,3.75,14h8.5a.75.75,0,0,0,0-1.5h-.5a.25.25,0,0,1-.25-.25V10.19A.26.26,0,0,1,11.69,9.94ZM10,12.25a.25.25,0,0,1-.25.25h-6a1.25,1.25,0,0,1,0-2.5h6a.25.25,0,0,1,.25.25Zm.5-3.75H3A.5.5,0,0,1,2.5,8V2.5a1,1,0,0,1,1-1h7a1,1,0,0,1,1,1v5A1,1,0,0,1,10.5,8.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceContentBookAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
