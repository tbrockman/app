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
                d="M10,1H1A1,1,0,0,0,0,2V7A1,1,0,0,0,1,8h9a1,1,0,0,0,1-1V2A1,1,0,0,0,10,1ZM3.25,5.75A1.25,1.25,0,1,1,4.5,4.5,1.25,1.25,0,0,1,3.25,5.75Zm4.5,0A1.25,1.25,0,1,1,9,4.5,1.25,1.25,0,0,1,7.75,5.75Z"
            />
            <path
                d="M13.78,8.22a.75.75,0,0,0-1.06,0L9.93,11a.24.24,0,0,1-.36,0l-.79-.79a.75.75,0,0,0-1.06,0,.75.75,0,0,0,0,1.06l1.5,1.5a.75.75,0,0,0,1.06,0l3.5-3.5A.75.75,0,0,0,13.78,8.22Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceLoginPasswordCorrect',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
