<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.29,10.6,7.18,5.49a.25.25,0,0,0-.36,0L1.71,10.6a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.41L5.94,3.54a1.51,1.51,0,0,1,2.12,0l5.65,5.65a1,1,0,0,1,0,1.41A1,1,0,0,1,12.29,10.6Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsButtonUp',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
