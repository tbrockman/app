<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1.5A1.5,1.5,0,0,0,12.5,0H1.5A1.5,1.5,0,0,0,0,1.5v11A1.5,1.5,0,0,0,1.5,14h11A1.5,1.5,0,0,0,14,12.5ZM3.5,3.75h3a.75.75,0,0,1,0,1.5h-3a.75.75,0,0,1,0-1.5ZM11.63,5.1a.75.75,0,0,1,.27,1l-3.25,5.5a.77.77,0,0,1-.52.36.75.75,0,0,1-.61-.16l-2-1.64a.25.25,0,0,0-.35,0L3.81,11.75a.75.75,0,0,1-1.06.06.75.75,0,0,1-.06-1.06l2-2.25a.75.75,0,0,1,1-.08L7.57,9.93a.23.23,0,0,0,.21.05A.25.25,0,0,0,8,9.87l2.65-4.5A.75.75,0,0,1,11.63,5.1Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceContentChart',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
