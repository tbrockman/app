<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13,2.5H1a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1v-7A1,1,0,0,0,13,2.5ZM4.5,8.75A.25.25,0,0,1,4.25,9H4A2,2,0,0,1,4,5h.25a.25.25,0,0,1,.25.25Zm3.5,0A.25.25,0,0,1,7.75,9H6.25A.25.25,0,0,1,6,8.75V5.25A.25.25,0,0,1,6.25,5h1.5A.25.25,0,0,1,8,5.25ZM10,9H9.75a.25.25,0,0,1-.25-.25V5.25A.25.25,0,0,1,9.75,5H10a2,2,0,0,1,0,4Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentMusicNoteCassette',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
