<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25,2H1.75A1.76,1.76,0,0,0,0,3.75v6.5A1.76,1.76,0,0,0,1.75,12h10.5A1.76,1.76,0,0,0,14,10.25V3.75A1.76,1.76,0,0,0,12.25,2Zm-2,7.5H3.75a.75.75,0,0,1,0-1.5h6.5a.75.75,0,0,1,0,1.5Zm0-3.5H3.75a.75.75,0,0,1,0-1.5h6.5a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerKeyboardWireLess',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
