<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.25,6.25a6.25,6.25,0,0,0-12.5,0A6.14,6.14,0,0,0,3.63,11.5a.25.25,0,0,1,.12.21V13.5a.5.5,0,0,0,.5.5h5.5a.5.5,0,0,0,.5-.5V12.25A.25.25,0,0,1,10.5,12h.75a2,2,0,0,0,2-2Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceUserHuman',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
