<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25,0H1.75A1.76,1.76,0,0,0,0,1.75v10.5A1.76,1.76,0,0,0,1.75,14h10.5A1.76,1.76,0,0,0,14,12.25V1.75A1.76,1.76,0,0,0,12.25,0ZM9.62,7.65l-4,2.25a.77.77,0,0,1-.75,0,.76.76,0,0,1-.37-.65V4.75a.76.76,0,0,1,.37-.65.77.77,0,0,1,.75,0l4,2.25a.75.75,0,0,1,0,1.3Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentPlayList4',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
