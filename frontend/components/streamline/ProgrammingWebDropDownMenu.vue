<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25,3H1.75A1.76,1.76,0,0,0,0,4.75v4.5A1.76,1.76,0,0,0,1.75,11h10.5A1.76,1.76,0,0,0,14,9.25V4.75A1.76,1.76,0,0,0,12.25,3ZM6.5,9.25a.25.25,0,0,1-.25.25H1.75a.25.25,0,0,1-.25-.25V4.75a.25.25,0,0,1,.25-.25h4.5a.25.25,0,0,1,.25.25Zm4.85-2.4-1,1a.48.48,0,0,1-.7,0l-1-1a.47.47,0,0,1-.11-.54A.5.5,0,0,1,9,6h2a.5.5,0,0,1,.46.31A.47.47,0,0,1,11.35,6.85Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingWebDropDownMenu',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
