<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25,0H4.16A1.76,1.76,0,0,0,2.93.51L.51,2.93A1.73,1.73,0,0,0,0,4.16v8.09A1.76,1.76,0,0,0,1.75,14h10.5A1.76,1.76,0,0,0,14,12.25V1.75A1.76,1.76,0,0,0,12.25,0ZM10.5,11.75a.76.76,0,0,1-.75.75H4.25a.76.76,0,0,1-.75-.75v-3A.76.76,0,0,1,4.25,8h5.5a.76.76,0,0,1,.75.75Zm0-7.5A.76.76,0,0,1,9.75,5h-4A.76.76,0,0,1,5,4.25v-2a.76.76,0,0,1,.75-.75h4a.76.76,0,0,1,.75.75Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerStorageFloppyDisk',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
