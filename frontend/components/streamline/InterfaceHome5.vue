<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.71,6.29l-6-6a1,1,0,0,0-1.42,0l-6,6A1,1,0,0,0,1.71,7.71a.16.16,0,0,1,.18,0A.17.17,0,0,1,2,7.83V13.5a.5.5,0,0,0,.5.5H5.75A.25.25,0,0,0,6,13.75V11.5a1,1,0,0,1,2,0v2.25a.25.25,0,0,0,.25.25H11.5a.5.5,0,0,0,.5-.5V7.83a.17.17,0,0,1,.11-.16.16.16,0,0,1,.18,0,1,1,0,0,0,1.42,0A1,1,0,0,0,13.71,6.29ZM7,7.5a1,1,0,1,1,1-1A1,1,0,0,1,7,7.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceHome5',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
