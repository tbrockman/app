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
                d="M14,.75A.76.76,0,0,0,13.25,0H.75A.76.76,0,0,0,0,.75V4a.76.76,0,0,0,.75.75h12.5A.76.76,0,0,0,14,4ZM2.5,3.25a1,1,0,1,1,1-1A1,1,0,0,1,2.5,3.25ZM7,2.75H5.5a.5.5,0,0,1,0-1H7a.5.5,0,0,1,0,1Z"
            />
            <path
                d="M14,7a.76.76,0,0,0-.75-.75H.75A.76.76,0,0,0,0,7v3.25A.76.76,0,0,0,.75,11H6a.25.25,0,0,1,.25.25v1A.25.25,0,0,1,6,12.5H2.75a.75.75,0,0,0,0,1.5h8.5a.75.75,0,0,0,0-1.5H8a.25.25,0,0,1-.25-.25v-1A.25.25,0,0,1,8,11h5.25a.76.76,0,0,0,.75-.75ZM2.5,9.5a1,1,0,1,1,1-1A1,1,0,0,1,2.5,9.5ZM7,9H5.5a.5.5,0,0,1,0-1H7A.5.5,0,0,1,7,9Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ComputerDatabaseServer2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
