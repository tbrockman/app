<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.5,11.75A2.25,2.25,0,0,1,9.25,14H4.75A2.25,2.25,0,0,1,2.5,11.75V2.25A2.25,2.25,0,0,1,4.75,0h4.5A2.25,2.25,0,0,1,11.5,2.25ZM4.75,1.5A.76.76,0,0,0,4,2.25v9.5a.76.76,0,0,0,.75.75h4.5a.76.76,0,0,0,.75-.75V2.25a.76.76,0,0,0-.75-.75Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceEditPortraitSettingAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
