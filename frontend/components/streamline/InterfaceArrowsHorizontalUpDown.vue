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
                d="M4.65,4,6.83,1.84a.24.24,0,0,1,.35,0L9.35,4a.79.79,0,0,0,.53.22A.77.77,0,0,0,10.41,4a.74.74,0,0,0,0-1.06L7.79.33a1.11,1.11,0,0,0-1.58,0L3.59,3A.75.75,0,0,0,4.65,4Z"
            />
            <path
                d="M9.35,10,7.18,12.16a.24.24,0,0,1-.35,0L4.65,10a.75.75,0,1,0-1.06,1.06l2.62,2.62A1.12,1.12,0,0,0,7,14a1.11,1.11,0,0,0,.79-.33l2.62-2.62a.74.74,0,0,0,0-1.06A.75.75,0,0,0,9.35,10Z"
            />
            <path
                d="M13.25,6.25H.75a.75.75,0,0,0,0,1.5h12.5a.75.75,0,0,0,0-1.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsHorizontalUpDown',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
