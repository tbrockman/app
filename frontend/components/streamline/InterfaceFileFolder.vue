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
                d="M13.6,7.48A1.51,1.51,0,0,0,12.5,7H6l-.22-.86A1.49,1.49,0,0,0,4.36,5H1.5a1.5,1.5,0,0,0-1.09.47A1.55,1.55,0,0,0,0,6.6l.42,5.53a2,2,0,0,0,2,1.87h9.2a2,2,0,0,0,2-1.81L14,8.62A1.54,1.54,0,0,0,13.6,7.48Z"
            />
            <path
                d="M12,5.75a1,1,0,0,1-1-1V2.25A.25.25,0,0,0,10.75,2h-6a.25.25,0,0,0-.25.25v.5a1,1,0,0,1-2,0V1.5A1.5,1.5,0,0,1,4,0h7.5A1.5,1.5,0,0,1,13,1.5V4.75A1,1,0,0,1,12,5.75Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFileFolder',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
