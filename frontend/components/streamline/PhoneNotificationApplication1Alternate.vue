<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <circle cx="11.5" cy="2.5" r="2.5" />
            <path
                d="M10,11.25A1.25,1.25,0,0,1,8.75,12.5h-6A1.25,1.25,0,0,1,1.5,11.25v-6A1.25,1.25,0,0,1,2.75,4H7.44a.25.25,0,0,0,.2-.1.25.25,0,0,0,0-.22,4.2,4.2,0,0,1-.17-1,.25.25,0,0,0-.25-.23H2.75A2.75,2.75,0,0,0,0,5.25v6A2.75,2.75,0,0,0,2.75,14h6a2.75,2.75,0,0,0,2.75-2.75V6.74a.25.25,0,0,0-.23-.25,4.2,4.2,0,0,1-.95-.17.25.25,0,0,0-.22,0,.25.25,0,0,0-.1.2Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'PhoneNotificationApplication1Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
