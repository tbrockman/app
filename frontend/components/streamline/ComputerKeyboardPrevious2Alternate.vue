<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path d="M4.25,9.25a.75.75,0,0,1-1.5,0V4.75a.75.75,0,0,1,1.5,0Z" />
            <path
                d="M10.5,7.75H8.75V9a.74.74,0,0,1-.46.69.74.74,0,0,1-.82-.16l-2-2a.75.75,0,0,1,0-1.06l2-2a.75.75,0,0,1,.82-.16A.74.74,0,0,1,8.75,5V6.25H10.5a.75.75,0,0,1,0,1.5Z"
            />
            <path
                d="M11.25,14H2.75A2.75,2.75,0,0,1,0,11.25V2.75A2.75,2.75,0,0,1,2.75,0h8.5A2.75,2.75,0,0,1,14,2.75v8.5A2.75,2.75,0,0,1,11.25,14ZM2.75,1.5A1.25,1.25,0,0,0,1.5,2.75v8.5A1.25,1.25,0,0,0,2.75,12.5h8.5a1.25,1.25,0,0,0,1.25-1.25V2.75A1.25,1.25,0,0,0,11.25,1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ComputerKeyboardPrevious2Alternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
