<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path d="M8,11.5a1,1,0,0,1,0-2h5a1,1,0,0,1,0,2Z" />
            <path
                d="M8,8h3.72A.24.24,0,0,0,12,7.81a1.06,1.06,0,0,0,0-.31v-6A1.5,1.5,0,0,0,10.5,0h-9A1.5,1.5,0,0,0,0,1.5v6A1.5,1.5,0,0,0,1.5,9H5.89a.22.22,0,0,0,.19-.09A2.51,2.51,0,0,1,8,8ZM1.86,2.89a.75.75,0,1,1,.78-1.28L5.87,3.55a.24.24,0,0,0,.26,0L9.36,1.61a.75.75,0,1,1,.78,1.28L6.39,5.14a.75.75,0,0,1-.78,0Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MailInboxEnvelopeSubtract1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
