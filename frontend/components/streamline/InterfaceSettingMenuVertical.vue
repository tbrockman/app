<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="7" cy="2" r="2" />
            <circle cx="7" cy="7" r="2" />
            <circle cx="7" cy="12" r="2" />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceSettingMenuVertical',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
