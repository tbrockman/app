<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12,0H2A2,2,0,0,0,0,2V12a2,2,0,0,0,2,2H12a2,2,0,0,0,2-2V2A2,2,0,0,0,12,0ZM3.25,8.25A1.25,1.25,0,1,1,4.5,7,1.25,1.25,0,0,1,3.25,8.25ZM7,8.25A1.25,1.25,0,1,1,8.25,7,1.25,1.25,0,0,1,7,8.25Zm3.75,0A1.25,1.25,0,1,1,12,7,1.25,1.25,0,0,1,10.75,8.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceSettingMenuHorizontalSquare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
