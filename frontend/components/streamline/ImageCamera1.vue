<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25,3.25h-1.5a.26.26,0,0,1-.2-.1l-1.2-1.6a.74.74,0,0,0-.6-.3H5.25a.74.74,0,0,0-.6.3l-1.2,1.6a.26.26,0,0,1-.2.1H1.75A1.76,1.76,0,0,0,0,5v6a1.76,1.76,0,0,0,1.75,1.75h10.5A1.76,1.76,0,0,0,14,11V5A1.76,1.76,0,0,0,12.25,3.25ZM7,10.5A2.75,2.75,0,1,1,9.75,7.75,2.75,2.75,0,0,1,7,10.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ImageCamera1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
