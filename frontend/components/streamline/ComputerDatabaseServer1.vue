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
                d="M13.25,1.25H.75A.76.76,0,0,0,0,2V5.5a.76.76,0,0,0,.75.75h12.5A.76.76,0,0,0,14,5.5V2A.76.76,0,0,0,13.25,1.25ZM2.5,4.75a1,1,0,1,1,1-1A1,1,0,0,1,2.5,4.75Zm9.5-.5H8.5a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z"
            />
            <path
                d="M13.25,7.75H.75A.76.76,0,0,0,0,8.5V12a.76.76,0,0,0,.75.75h12.5A.76.76,0,0,0,14,12V8.5A.76.76,0,0,0,13.25,7.75ZM2.5,11.25a1,1,0,1,1,1-1A1,1,0,0,1,2.5,11.25Zm9.5-.5H8.5a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ComputerDatabaseServer1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
