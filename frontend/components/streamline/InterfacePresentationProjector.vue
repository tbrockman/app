<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13,6.5H12a.25.25,0,0,1-.25-.22,3.75,3.75,0,0,0-7.44,0A.25.25,0,0,1,4,6.5H1a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h.25a.25.25,0,0,1,.25.25v.5a.75.75,0,0,0,1.5,0v-.5a.25.25,0,0,1,.25-.25h7.5a.25.25,0,0,1,.25.25v.5a.75.75,0,0,0,1.5,0v-.5a.25.25,0,0,1,.25-.25H13a1,1,0,0,0,1-1v-4A1,1,0,0,0,13,6.5ZM8,9a2.25,2.25,0,1,1,2.25-2.25A2.25,2.25,0,0,1,8,9Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfacePresentationProjector',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
