<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM4,8a.5.5,0,0,1-.78.42l-1.5-1a.51.51,0,0,1,0-.84l1.5-1A.5.5,0,0,1,4,6Zm4.42,2.78-1,1.5a.51.51,0,0,1-.84,0l-1-1.5A.5.5,0,0,1,6,10H8a.5.5,0,0,1,.42.78Zm0-7A.51.51,0,0,1,8,4H6a.5.5,0,0,1-.42-.78l1-1.5a.53.53,0,0,1,.84,0l1,1.5A.51.51,0,0,1,8.44,3.74Zm3.84,3.68-1.5,1A.5.5,0,0,1,10,8V6a.5.5,0,0,1,.78-.42l1.5,1a.51.51,0,0,1,0,.84Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'EntertainmentControlButtonMoveCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
