<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.8,6.59,11.7,5.05l.39-2.58A.54.54,0,0,0,12,2a.52.52,0,0,0-.43-.14L9,2.3,7.4.2a.51.51,0,0,0-.8,0L5.05,2.3,2.48,1.9A.52.52,0,0,0,2.05,2a.54.54,0,0,0-.14.43L2.3,5.05.2,6.59a.51.51,0,0,0,0,.81L2.3,8.94l-.39,2.58a.51.51,0,0,0,.14.42.46.46,0,0,0,.43.14l2.57-.39,1.55,2.1a.5.5,0,0,0,.8,0L9,11.69l2.57.39a.46.46,0,0,0,.43-.14.51.51,0,0,0,.14-.42L11.7,8.94,13.8,7.4a.51.51,0,0,0,0-.81ZM7,9.49A2.5,2.5,0,1,1,9.5,7,2.49,2.49,0,0,1,7,9.49Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceWeatherSunAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
