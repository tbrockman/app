<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25.75A.76.76,0,0,0,11.5,0h-9a.76.76,0,0,0-.75.75v12.5a.75.75,0,0,0,1.5,0V8.75A.25.25,0,0,1,3.5,8.5h8a.76.76,0,0,0,.75-.75Zm-1.5,6A.25.25,0,0,1,10.5,7h-7a.25.25,0,0,1-.25-.25v-5A.25.25,0,0,1,3.5,1.5h7a.25.25,0,0,1,.25.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'TravelMapRectangleFlag',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
