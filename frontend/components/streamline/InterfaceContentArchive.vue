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
                d="M12.5,0H1.5A1.5,1.5,0,0,0,0,1.5v2A.5.5,0,0,0,.5,4h13a.5.5,0,0,0,.5-.5v-2A1.5,1.5,0,0,0,12.5,0Z"
            />
            <path
                d="M12.5,5.5H1.5A.5.5,0,0,0,1,6v6.5A1.5,1.5,0,0,0,2.5,14h9A1.5,1.5,0,0,0,13,12.5V6A.5.5,0,0,0,12.5,5.5Zm-4.25,4H5.75a1,1,0,0,1,0-2h2.5a1,1,0,0,1,0,2Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceContentArchive',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
