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
                d="M4,14H2.25A2.25,2.25,0,0,1,0,11.75V2.25A2.25,2.25,0,0,1,2.25,0H4A2.25,2.25,0,0,1,6.25,2.25v9.5A2.25,2.25,0,0,1,4,14ZM2.25,2A.25.25,0,0,0,2,2.25v9.5a.25.25,0,0,0,.25.25H4a.25.25,0,0,0,.25-.25V2.25A.25.25,0,0,0,4,2Z"
            />
            <path
                d="M11.75,14H10a2.25,2.25,0,0,1-2.25-2.25V2.25A2.25,2.25,0,0,1,10,0h1.75A2.25,2.25,0,0,1,14,2.25v9.5A2.25,2.25,0,0,1,11.75,14ZM10,2a.25.25,0,0,0-.25.25v9.5A.25.25,0,0,0,10,12h1.75a.25.25,0,0,0,.25-.25V2.25A.25.25,0,0,0,11.75,2Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentControlButtonPause2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
