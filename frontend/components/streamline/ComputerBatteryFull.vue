<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,5.25a.76.76,0,0,0-.75-.75h-.5a.25.25,0,0,1-.25-.25A1.76,1.76,0,0,0,10.75,2.5h-9A1.76,1.76,0,0,0,0,4.25v5.5A1.76,1.76,0,0,0,1.75,11.5h9A1.76,1.76,0,0,0,12.5,9.75a.25.25,0,0,1,.25-.25h.5A.76.76,0,0,0,14,8.75ZM3.5,9a.5.5,0,0,1-.5.5H2.5A.5.5,0,0,1,2,9V5a.5.5,0,0,1,.5-.5H3a.5.5,0,0,1,.5.5ZM7,9a.5.5,0,0,1-.5.5H6A.5.5,0,0,1,5.5,9V5A.5.5,0,0,1,6,4.5h.5A.5.5,0,0,1,7,5Zm3.5,0a.5.5,0,0,1-.5.5H9.5A.5.5,0,0,1,9,9V5a.5.5,0,0,1,.5-.5H10a.5.5,0,0,1,.5.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerBatteryFull',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
