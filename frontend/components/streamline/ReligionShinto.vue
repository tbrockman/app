<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.75,5A1.25,1.25,0,0,0,14,3.75v-3A.75.75,0,0,0,13.62.1a.74.74,0,0,0-.76,0C8.75,2.64,5.25,2.64,1.14.11A.74.74,0,0,0,.38.1.75.75,0,0,0,0,.75v3A1.25,1.25,0,0,0,1.25,5h1a.25.25,0,0,1,.25.25v2a.25.25,0,0,1-.25.25H.75A.75.75,0,0,0,.75,9h1.5a.25.25,0,0,1,.25.25v4a.75.75,0,0,0,1.5,0v-4A.25.25,0,0,1,4.25,9h5.5a.25.25,0,0,1,.25.25v4a.75.75,0,0,0,1.5,0v-4A.25.25,0,0,1,11.75,9h1.5a.75.75,0,0,0,0-1.5h-1.5a.25.25,0,0,1-.25-.25v-2A.25.25,0,0,1,11.75,5ZM4,5.25A.25.25,0,0,1,4.25,5H6a.25.25,0,0,1,.25.25v2A.25.25,0,0,1,6,7.5H4.25A.25.25,0,0,1,4,7.25Zm6,2a.25.25,0,0,1-.25.25H8a.25.25,0,0,1-.25-.25v-2A.25.25,0,0,1,8,5H9.75a.25.25,0,0,1,.25.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ReligionShinto',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
