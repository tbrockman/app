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
                d="M13.78,6.47l-3-3A.75.75,0,1,0,9.72,4.53L11,5.82a.26.26,0,0,1,.06.28.25.25,0,0,1-.23.15H7.75a.75.75,0,0,0,0,1.5h3.09a.25.25,0,0,1,.23.15.26.26,0,0,1-.06.28L9.72,9.47a.75.75,0,0,0,0,1.06.75.75,0,0,0,1.06,0l3-3A.75.75,0,0,0,13.78,6.47Z"
            />
            <path
                d="M3.75,0h-2A1.76,1.76,0,0,0,0,1.75v10.5A1.76,1.76,0,0,0,1.75,14h2A1.76,1.76,0,0,0,5.5,12.25V1.75A1.76,1.76,0,0,0,3.75,0ZM4,12.25a.25.25,0,0,1-.25.25h-2a.25.25,0,0,1-.25-.25V1.75a.25.25,0,0,1,.25-.25h2A.25.25,0,0,1,4,1.75Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsMoveRightAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
