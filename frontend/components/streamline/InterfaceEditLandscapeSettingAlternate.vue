<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.75,11.5H2.25A2.25,2.25,0,0,1,0,9.25V4.75A2.25,2.25,0,0,1,2.25,2.5h9.5A2.25,2.25,0,0,1,14,4.75v4.5A2.25,2.25,0,0,1,11.75,11.5ZM2.25,4a.76.76,0,0,0-.75.75v4.5a.76.76,0,0,0,.75.75h9.5a.76.76,0,0,0,.75-.75V4.75A.76.76,0,0,0,11.75,4Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditLandscapeSettingAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
