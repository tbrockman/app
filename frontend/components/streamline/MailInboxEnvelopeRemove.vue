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
                d="M12.24,11.18a.25.25,0,0,1,0-.36l1.54-1.54a.75.75,0,0,0-1.06-1.06L11.18,9.76a.25.25,0,0,1-.36,0L9.28,8.22A.75.75,0,0,0,8.22,9.28l1.54,1.54a.25.25,0,0,1,0,.36L8.22,12.72a.75.75,0,0,0,0,1.06.75.75,0,0,0,1.06,0l1.54-1.54a.25.25,0,0,1,.36,0l1.54,1.54a.75.75,0,0,0,1.06,0,.75.75,0,0,0,0-1.06Z"
            />
            <path
                d="M6.5,8.75a2.25,2.25,0,0,1,3.84-1.59l.49.48a.25.25,0,0,0,.35,0c.21-.21.56-.55.74-.7A.27.27,0,0,0,12,6.76V1.5A1.5,1.5,0,0,0,10.5,0h-9A1.5,1.5,0,0,0,0,1.5v6A1.5,1.5,0,0,0,1.5,9H6.25a.24.24,0,0,0,.25-.25ZM6,5.25a.79.79,0,0,1-.39-.11L1.86,2.89a.75.75,0,1,1,.78-1.28L5.87,3.55a.24.24,0,0,0,.26,0L9.36,1.61a.75.75,0,1,1,.78,1.28L6.39,5.14A.79.79,0,0,1,6,5.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MailInboxEnvelopeRemove',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
