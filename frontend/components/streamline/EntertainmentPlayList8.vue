<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path
                d="M12.25,14h-8a.75.75,0,0,1,0-1.5h8a.25.25,0,0,0,.25-.25v-8a.75.75,0,0,1,1.5,0v8A1.76,1.76,0,0,1,12.25,14Z"
            />
            <path
                d="M9,0H1.5A1.5,1.5,0,0,0,0,1.5V9a1.5,1.5,0,0,0,1.5,1.5H9A1.5,1.5,0,0,0,10.5,9V1.5A1.5,1.5,0,0,0,9,0ZM7.07,5.56,3.8,7.45a.36.36,0,0,1-.55-.31V3.36a.36.36,0,0,1,.55-.31L7.07,4.94A.36.36,0,0,1,7.07,5.56Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentPlayList8',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
