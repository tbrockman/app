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
                d="M9,0H1.5A1.5,1.5,0,0,0,0,1.5V9a1.5,1.5,0,0,0,1.5,1.5H9A1.5,1.5,0,0,0,10.5,9V1.5A1.5,1.5,0,0,0,9,0ZM8.15,4.22a.69.69,0,0,1-1,.24l-.88-.53a.23.23,0,0,0-.25,0,.25.25,0,0,0-.13.22V6.87A1.85,1.85,0,1,1,4.1,5h.2A.24.24,0,0,0,4.48,5a.23.23,0,0,0,.08-.18V2.48a.68.68,0,0,1,.35-.6.7.7,0,0,1,.7,0l2.3,1.38A.69.69,0,0,1,8.15,4.22Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentPlayList5',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
