<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12,2.3h-.5a.25.25,0,0,1-.25-.25V.75a.75.75,0,0,0-1.5,0v1.3a.25.25,0,0,1-.25.25H8a.25.25,0,0,1-.25-.25V.75a.75.75,0,0,0-1.5,0v1.3A.25.25,0,0,1,6,2.3H4.5a.25.25,0,0,1-.25-.25V.75a.75.75,0,0,0-1.5,0v1.3a.25.25,0,0,1-.25.25H2A1.5,1.5,0,0,0,.5,3.8v8.7A1.5,1.5,0,0,0,2,14H12a1.5,1.5,0,0,0,1.5-1.5V3.8A1.5,1.5,0,0,0,12,2.3ZM7.5,11h-4a.75.75,0,0,1,0-1.5h4a.75.75,0,0,1,0,1.5Zm3-3.5h-7A.75.75,0,0,1,3.5,6h7a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceContentNotePadText',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
