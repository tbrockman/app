<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M1,13.25a1,1,0,0,0,1-1V7.5a.25.25,0,0,1,.25-.25H10a.25.25,0,0,1,.23.15.26.26,0,0,1-.05.28L7.79,10a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L13.71,7a1,1,0,0,0,0-1.42L9.21,1A1,1,0,1,0,7.79,2.46l2.37,2.36a.26.26,0,0,1,.05.28.25.25,0,0,1-.23.15H2a2,2,0,0,0-2,2v5A1,1,0,0,0,1,13.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsBendRight1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
