<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.5,0h-9A.5.5,0,0,0,2,.5v13a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5V.5A.5.5,0,0,0,11.5,0Zm-3,8.75A1.25,1.25,0,1,1,9.75,7.5,1.25,1.25,0,0,1,8.5,8.75Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceHome4',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
