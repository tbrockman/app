<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13,8.25V1.75A1.76,1.76,0,0,0,11.25,0h-8A2.25,2.25,0,0,0,1,2.25v9A2.75,2.75,0,0,0,3.75,14h8.5a.75.75,0,0,0,0-1.5h-.5a.25.25,0,0,1-.25-.25V10.19a.26.26,0,0,1,.19-.25A1.75,1.75,0,0,0,13,8.25ZM3.75,12.5a1.25,1.25,0,0,1,0-2.5h6a.25.25,0,0,1,.25.25v2a.25.25,0,0,1-.25.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceContentBook1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
