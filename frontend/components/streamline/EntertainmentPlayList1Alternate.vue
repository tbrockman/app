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
                d="M14,1.75A1.76,1.76,0,0,0,12.25,0H1.75A1.76,1.76,0,0,0,0,1.75v10.5A1.76,1.76,0,0,0,1.75,14h10.5A1.76,1.76,0,0,0,14,12.25Zm-1.5,0v1.5a.25.25,0,0,1-.25.25H10a.24.24,0,0,1-.21-.11.23.23,0,0,1,0-.24l.64-1.5a.25.25,0,0,1,.23-.15h1.59A.25.25,0,0,1,12.5,1.75Zm-7,1.75a.24.24,0,0,1-.21-.11.23.23,0,0,1,0-.24l.64-1.5a.25.25,0,0,1,.23-.15H8.48a.24.24,0,0,1,.21.11.23.23,0,0,1,0,.24l-.64,1.5a.25.25,0,0,1-.23.15Zm-3.77-2H4a.24.24,0,0,1,.21.11.23.23,0,0,1,0,.24l-.64,1.5a.25.25,0,0,1-.23.15H1.75a.25.25,0,0,1-.25-.25V1.75A.25.25,0,0,1,1.75,1.5ZM12.5,12.25a.25.25,0,0,1-.25.25H1.75a.25.25,0,0,1-.25-.25v-7A.25.25,0,0,1,1.75,5h10.5a.25.25,0,0,1,.25.25Z"
            />
            <path
                d="M6,6.42a.36.36,0,0,0-.55.31v3.83a.37.37,0,0,0,.55.32L9.32,9a.37.37,0,0,0,0-.63Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentPlayList1Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
