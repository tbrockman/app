<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,2.5A2.5,2.5,0,0,0,11.5,0H4.75A2.75,2.75,0,0,0,2,2.75v8.5A1.25,1.25,0,0,1,.75,12.5a.75.75,0,0,0,0,1.5h7a2.75,2.75,0,0,0,2.75-2.75v-6A.25.25,0,0,1,10.75,5h2A1.25,1.25,0,0,0,14,3.75ZM8.25,10.38h-4a.63.63,0,0,1,0-1.26h4a.63.63,0,0,1,0,1.26Zm0-3h-4a.63.63,0,0,1,0-1.26h4a.63.63,0,0,1,0,1.26Zm0-3H5.5a.63.63,0,0,1,0-1.26H8.25a.63.63,0,0,1,0,1.26ZM12.5,3.25a.25.25,0,0,1-.25.25h-1.5a.25.25,0,0,1-.25-.25V2.5a1,1,0,0,1,2,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingScript2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
