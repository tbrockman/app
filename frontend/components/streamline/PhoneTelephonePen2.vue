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
                d="M7.75,0h-6A1.76,1.76,0,0,0,0,1.75v10.5A1.76,1.76,0,0,0,1.75,14h6A1.76,1.76,0,0,0,9.5,12.25V1.75A1.76,1.76,0,0,0,7.75,0Zm-3,4a1,1,0,1,1,1-1A1,1,0,0,1,4.75,4Z"
            />
            <path
                d="M11,4.07a.2.2,0,0,1,0-.13l1-1.73a.51.51,0,0,1,.86,0l1,1.73a.2.2,0,0,1,0,.13V13a1,1,0,0,1-1,1H12a1,1,0,0,1-1-1Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'PhoneTelephonePen2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
