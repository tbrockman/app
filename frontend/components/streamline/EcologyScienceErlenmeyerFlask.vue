<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.46,10h0L10,5.65V2.25A.25.25,0,0,1,10.25,2h.25a1,1,0,0,0,0-2h-7a1,1,0,0,0,0,2h.25A.25.25,0,0,1,4,2.25v3.4L.54,10A2.5,2.5,0,0,0,.26,12.6,2.53,2.53,0,0,0,2.52,14h9a2.53,2.53,0,0,0,2.26-1.4A2.5,2.5,0,0,0,13.46,10ZM12,11.71a.52.52,0,0,1-.47.29h-9a.52.52,0,0,1-.47-.29.49.49,0,0,1,.05-.51L5.78,6.63A1,1,0,0,0,6,6V2.25A.25.25,0,0,1,6.25,2h1.5A.25.25,0,0,1,8,2.25V6a1,1,0,0,0,.22.63l3.67,4.57A.48.48,0,0,1,12,11.71Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EcologyScienceErlenmeyerFlask',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
