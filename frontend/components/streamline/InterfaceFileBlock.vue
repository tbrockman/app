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
                d="M4.25,5.5A4.25,4.25,0,1,0,8.5,9.75,4.26,4.26,0,0,0,4.25,5.5ZM1.5,9.75A2.75,2.75,0,0,1,4.25,7a2.78,2.78,0,0,1,1,.19.26.26,0,0,1,.16.18.28.28,0,0,1-.07.23L2.1,10.84a.28.28,0,0,1-.23.07.26.26,0,0,1-.18-.16A2.78,2.78,0,0,1,1.5,9.75ZM4.25,12.5a2.78,2.78,0,0,1-1-.19.26.26,0,0,1-.16-.18.28.28,0,0,1,.07-.23L6.4,8.66a.28.28,0,0,1,.23-.07.26.26,0,0,1,.18.16,2.78,2.78,0,0,1,.19,1A2.75,2.75,0,0,1,4.25,12.5Z"
            />
            <path
                d="M14,4.5A.75.75,0,0,0,13.78,4L10,.22A.75.75,0,0,0,9.5,0H3.75A1.76,1.76,0,0,0,2,1.75V4.09a.26.26,0,0,0,.11.21.25.25,0,0,0,.22,0,6.15,6.15,0,0,1,1-.25.25.25,0,0,0,.21-.25V1.75a.25.25,0,0,1,.25-.25H9.09a.26.26,0,0,1,.17.07l3.17,3.17a.26.26,0,0,1,.07.17v7.34a.25.25,0,0,1-.25.25H9.44a.26.26,0,0,0-.21.12,5.14,5.14,0,0,1-.7,1,.27.27,0,0,0,0,.27.25.25,0,0,0,.23.15h3.53A1.76,1.76,0,0,0,14,12.25Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFileBlock',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
