<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25,5h-7A.25.25,0,0,1,5,4.75,1.25,1.25,0,0,1,6.25,3.5h2.5A2.75,2.75,0,0,0,11.5.75a.75.75,0,0,0-1.5,0A1.25,1.25,0,0,1,8.75,2H6.25A2.75,2.75,0,0,0,3.5,4.75.25.25,0,0,1,3.25,5H1.75A1.76,1.76,0,0,0,0,6.75v5.5A1.76,1.76,0,0,0,1.75,14h10.5A1.76,1.76,0,0,0,14,12.25V6.75A1.76,1.76,0,0,0,12.25,5ZM11,11.5H3a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-3H3a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerKeyboard',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
