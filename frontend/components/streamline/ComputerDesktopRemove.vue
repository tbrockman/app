<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25,0H1.75A1.76,1.76,0,0,0,0,1.75v7.5A1.76,1.76,0,0,0,1.75,11H5a.26.26,0,0,1,.21.11.29.29,0,0,1,0,.24L4.56,13a.75.75,0,0,0,.69,1h3.5a.75.75,0,0,0,.69-1l-.67-1.61a.29.29,0,0,1,0-.24A.26.26,0,0,1,9,11h3.25A1.76,1.76,0,0,0,14,9.25V1.75A1.76,1.76,0,0,0,12.25,0ZM8.75,6.25H5.25a.75.75,0,0,1,0-1.5h3.5a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerDesktopRemove',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
